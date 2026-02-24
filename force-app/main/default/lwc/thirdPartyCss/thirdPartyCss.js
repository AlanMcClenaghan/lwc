import { LightningElement } from 'lwc';
import ANIMATE from '@salesforce/resourceUrl/animate'
import {loadStyle} from 'lightning/platformResourceLoader'
export default class ThirdPartyCss extends LightningElement {
    isLibraryLoaded = false
    renderedCallback(){ 
        if(this.isLibraryLoaded){ 
            return
        } else { 
            loadStyle(this, ANIMATE+'/animate/animate.min.css').then(()=>{ 
                this.setDateOnScreen()
            }).catch(error=>{ 
                console.error(error)
            })
            this.isLibLoaded = true      
        }     
    }
}