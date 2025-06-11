import { LightningElement } from 'lwc';
import DESCRIPTION_ONE from '@salesforce/label/c.descriptionOne'
import DESCRIPTION_TWO from '@salesforce/label/c.descriptionTwo'
import DESCRIPTION_THREE from '@salesforce/label/c.descriptionThree'
export default class CustomLabelsDemo extends LightningElement {
    LABELS = { 
        descriptionOne:DESCRIPTION_ONE,
        descriptionTwo:DESCRIPTION_TWO,
        descriptionThree:DESCRIPTION_THREE
    }
}