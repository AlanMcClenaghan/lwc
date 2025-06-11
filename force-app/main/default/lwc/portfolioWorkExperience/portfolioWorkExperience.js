import { LightningElement, wire, api } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

export default class PortfolioWorkExperience extends LightningElement {

    @api recordId
    workExperienceList = []
    @wire(getRelatedListRecords, {
        parentRecordId:'$recordId',
        relatedListId:'WorkExperience__r',
        fields:['WorkExperience__c.JobStartDate__c',
        'WorkExperience__c.JobEndDate__c',
        'WorkExperience__c.Role__c',
        'WorkExperience__c.CompanyName__c',
        'WorkExperience__c.WorkLocation__c',
        'WorkExperience__c.Description__c',
        'WorkExperience__c.IsCurrent__c'
    ]
    })WorkExperienceHandler({data, error}) {
        if (data) {
            console.log("WorkExperience Data", JSON.stringify(data))
            this.formatExperience(data)
        }
        if (error) {
            console.error(error)
        }
    }

    formatExperience(data) {
        this.workExperienceList = [...data.records].reverse().map(item=>{
            let id = item.id
            
            const {
                JobStartDate__c,
                JobEndDate__c, 
                Role__c, 
                CompanyName__c, 
                WorkLocation__c, 
                Description__c, 
                IsCurrent__c 
            } = item.fields

            let JobStartDate = this.getValue(JobStartDate__c)
            let JobStartDateOriginal = JobStartDate
            let JobEndDate = this.getValue(JobEndDate__c)
            let CompanyName = this.getValue(CompanyName__c)
            let WorkLocation = this.getValue(WorkLocation__c)
            let Description = this.getValue(Description__c)
            let IsCurrent = this.getValue(IsCurrent__c)
            let Role = this.getValue(Role__c)

            console.log("Test Start Date: ", JobStartDate, "End Date: ", JobEndDate)

            JobStartDate = this.formatDate(JobStartDate)

            if (JobEndDate) {
                 console.log("JobEndDate end ", JobStartDate)

                JobEndDate = this.formatDate(JobEndDate)
            }

            return {id,JobStartDate,JobStartDateOriginal, JobEndDate,CompanyName,WorkLocation, Description, IsCurrent, Role}
        })

        console.log("workExperienceList", JSON.stringify(this.workExperienceList))
        this.workExperienceList = [...this.workExperienceList].sort(this.compareByStartDate)
        
    }

    getValue(data) {
        return data && (data.displayValue || data.value)
    }

    formatDate(date) {
         return new Intl.DateTimeFormat('en-GB', { month: 'long', year: 'numeric' }).format(new Date(date));
        
        // let d = date.split("/")
        // console.log(d[0])
        // // let day = d[1]
        // // let month = d[0]
        // let month

        // switch (d[0]) {
        //     case "1": 
        //         month = 'January';
        //         break;
        //     case "2":
        //         month = "February";
        //         break;
        //     case "3":
        //         month = "March";
        //         break;
        //     case "4":
        //         month = "April";
        //         break;
        //     case "5": 
        //         month = "May";
        //         break;
        //     case "6": 
        //         month = "June"; 
        //         break;
        //     case "7": 
        //         month = "July";
        //         break;
        //     case "8": 
        //         month = "August";
        //         break;
        //     case "9":
        //         month = "September";
        //         break;
        //     case "10": 
        //         month = "October";
        //         break;
        //     case "11": 
        //         month = "November";
        //         break;
        //     case "12": 
        //         month = "December";
        //         break;
        // }

        // let year = d[2]

        // // console.log("day: " + day)
        // console.log("month: " + month)
        // console.log("year: " + year)

        // // return `${day}/${month}/${year}`
        // return `${month} ${year}`
    }

    compareByStartDate(a, b) {
        var dateA = new Date(a.JobStartDateOriginal);
        var dateB = new Date(b.JobStartDateOriginal);

        return dateB - dateA;
    }

}