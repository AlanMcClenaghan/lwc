import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
    navigateToListView() { 
        this[NavigationMixin.Navigate]({ 
            type:'standard__objectPage',
            attributes:{ 
                objectApiName:'Contact',
                actionName:'list'
            },
            state:{ 
                filterName:'Recent'
            }
        })
    }
    navigateToFiles() { 
        this[NavigationMixin.Navigate]({ 
            type:'standard__objectPage',
            attributes:{ 
                objectApiName:'ContentDocument',
                actionName:'home'
            }
        })
    }
}