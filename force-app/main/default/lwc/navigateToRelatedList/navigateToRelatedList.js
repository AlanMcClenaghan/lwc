import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigateToRelatedList extends NavigationMixin(LightningElement) {
    NavigateToRelatedList(){ 
        this[NavigationMixin.Navigate]({ 
            type:'standard__recordRelationshipPage',
            attributes:{ 
                recordId:'0014L000006tVuBQAU',
                objectApiName:'Account',
                relationshipApiName:'Contacts',
                actionName:'view'
            }
        })
    }
}