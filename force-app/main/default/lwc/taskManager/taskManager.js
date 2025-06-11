import { LightningElement, wire, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex';
import getTasks from '@salesforce/apex/TaskManagerController.getTasks';
import updateTask from '@salesforce/apex/TaskManagerController.updateTask';
import createTask from '@salesforce/apex/TaskManagerController.createTask';

export default class TaskManager extends LightningElement {
    @track tasks;
    @track error;
    @track isModalOpen = false;
    @track newTask = {
        Subject: '',
        ActivityDate: '',
        Priority: 'Normal'
    };
    priorityOptions = [
        { label: 'High', value: 'High' },
        { label: 'Normal', value: 'Normal' },
        { label: 'Low', value: 'Low' }
    ];

    columns = [
        { label: 'Subject', fieldName: 'Subject', type: 'text' },
        { label: 'Due Date', fieldName: 'ActivityDate', type: 'date' },
        {
            label: 'Status', fieldName: 'Status', type: 'picklist',
            typeAttributes: {
                placeholder: 'Choose status',
                options: [
                    { label: 'Not Started', value: 'Not Started' },
                    { label: 'In Progress', value: 'In Progress' },
                    { label: 'Completed', value: 'Completed' }
                ],
                value: { fieldName: 'Status' },
                context: { fieldName: 'Id' }
            },
            editable: true
        },
        {
            type: 'button', typeAttributes: {
                label: 'Mark Complete', name: 'markComplete', title: 'Mark Complete', disabled: false, value: 'markComplete'
            }
        }
    ];

    @wire(getTasks)
    wiredTasks(result) {
        if (result.data) {
            this.tasks = result.data;
            this.error = undefined;
        } else if (result.error) {
            this.error = result.error;
            this.tasks = undefined;
        }
        this.wiredTasksResult = result;
    }

    handleCellChange(event) {
        const fields = event.detail.draftValues[0];
        const taskId = fields.Id;
        const status = fields.Status;

        this.updateTaskStatus(taskId, status);
    }

    handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        if (actionName === 'markComplete') {
            this.updateTaskStatus(row.Id, 'Completed');
        }
    }

    updateTaskStatus(taskId, status) {
        updateTask({ taskId: taskId, status: status })
            .then(() => {
                this.showToast('Success', 'Task status updated', 'success');
                return refreshApex(this.wiredTasksResult);
            })
            .catch(error => {
                this.showToast('Error', error.body.message, 'error');
            });
    }

    handleInputChange(event) {
        const field = event.target.dataset.id;
        this.newTask[field] = event.target.value;
    }

    handleNewTask() {
        this.isModalOpen = true;
    }

    closeModal() {
        this.isModalOpen = false;
    }

    saveNewTask() {
        createTask({ task: this.newTask })
            .then(() => {
                this.showToast('Success', 'Task created', 'success');
                this.isModalOpen = false;
                return refreshApex(this.wiredTasksResult);
            })
            .catch(error => {
                this.showToast('Error', error.body.message, 'error');
            });
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant
        });
        this.dispatchEvent(event);
    }
}