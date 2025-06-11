import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationExample extends NavigationMixin(LightningElement) {

    openSFDCFacts(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes: {
                url : 'http://alanmcclenaghan.com/'
            }
        });
    }

    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    createNewContact(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    openOppListView(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            }
        });
    }

    openCaseRecord(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes: {
                recordId: "5004L000005XZL9QAO",
                objectApiName: 'Case', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

    openMeetingRoom(){
        this[NavigationMixin.Navigate]({
            type : 'standard__navItemPage',
            attributes: {
                apiName: 'Events1'
            }
        });
    }

    previewFile(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'filePreview'
            },
            state : {
                recordIds: '0694L0000031Q6lQAE,0694L0000031Q6qQAE',
                selectedRecordId:'0694L0000031Q6lQAE'
            }
        });
    }

}