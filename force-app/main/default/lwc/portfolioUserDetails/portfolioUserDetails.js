import { LightningElement, api } from 'lwc';

export default class PortfolioUserDetails extends LightningElement {

    @api recordId
    @api objectApiName
    @api resumeUrl

    downloadResume() {
        window.open(this.resumeUrl,"_blank")
    }

    //"https://github.com/AlanMcClenaghan/resume/raw/main/Alan%20McClenaghan%20CV.pdf"

}