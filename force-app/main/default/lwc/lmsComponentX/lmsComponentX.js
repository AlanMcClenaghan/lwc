import { LightningElement, wire } from 'lwc';
import SAMPLEMC from "@salesforce/messageChannel/sampleMessageChannel__c"
import {subscribe, MessageContext, APPLICATION_SCOPE, unsubscribe} from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    receivedMessage
    subscription
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
        //subscribe(messageContext, messageChannel, listener, subscriberOptions)
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope:APPLICATION_SCOPE})
    }

    handleMessage(message){
        this.receivedMessage = message.lmsData.value ? message.lmsData.value :'No Message to publish'
    }

    unsubscribeMessage(){
        unsubscribe(this.subscription)
        this.subscription = null
    }
    
}