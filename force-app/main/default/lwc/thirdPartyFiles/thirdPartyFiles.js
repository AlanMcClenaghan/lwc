import { LightningElement } from 'lwc';
import MOMENT from '@salesforce/resourceUrl/moment'
import {loadScript} from 'lightning/platformResourceLoader'
export default class ThirdPartyFiles extends LightningElement {
    currentDate=''
    isLibraryLoaded = false
    renderedCallback(){ 
        if(this.isLibraryLoaded){ 
            return
        } else {  
            Promise.all([
                loadScript(this, MOMENT+'/moment/moment.min.js')
            ]).then(()=>{ 
                this.setDateOnScreen()
            })
            this.isLibraryLoaded = true
        }
    }
    setDateOnScreen(){ 
        this.currentDate = moment().format('LLLL')
    }
}