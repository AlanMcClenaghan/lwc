// Importing necessary modules and resources
import { LightningElement, wire} from 'lwc';
import marriageInvitationAssets from '@salesforce/resourceUrl/marriageInvitationAssets';
import getInvitationDetailsById from '@salesforce/apex/InvitationController.getInvitationDetailsById';
import CONFETTI from '@salesforce/resourceUrl/confetti';
import {loadScript} from 'lightning/platformResourceLoader';

export default class InvitationBanner extends LightningElement {
    // Public properties to be exposed in the Lightning App Builder
    recordId = ''; //a0CJ500000Vl2XtMAJ
    facebookUrl = '';
    twitterUrl = '';
    instagramUrl = '';
    theme = 'theme1';
    isConfettiLoaded = false;

    connectedCallback(){
        let invitationId = new URL(location.href).searchParams.get('invitationid')
        if(invitationId){
            this.recordId = invitationId
        }
    }

    // Countdown timer properties
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    intervalId;

    // Paths to the static resources
    instagram = marriageInvitationAssets + '/instagram.svg';
    twitter = marriageInvitationAssets + '/twitter.svg';
    facebook = marriageInvitationAssets + '/facebook.svg';

    // Placeholder for invitation details
    invitationDetails = {};
  
    // Dynamically setting background image style for the banner
    get bannerImageStyle() {
        let themeName =  marriageInvitationAssets + `/${this.theme}.jpeg`;
        return `background-image: url(${themeName});`;
    }

    // Wire service to fetch invitation details by ID
    @wire(getInvitationDetailsById, { Id: '$recordId' })
    invitationDetailsHandler({ data, error }) {
        if (data) {
            console.log('invitationDetailsHandler', data);
            this.facebookUrl = data.Facebook_URL__c
            this.twitterUrl = data.Twitter_URL__c
            this.instagramUrl = data.Instagram_URL__c
            this.theme = data.Theme__c
            this.invitationDetails = data;
            this.countdownTimer(data.Event_Date_and_Time__c);
        }
        if (error) {
            console.error('error', error);
        }
    }

    // Function to start the countdown timer
    countdownTimer(targetDate) {
        // Update the countdown every second
        this.intervalId = setInterval(() => {
            // Get the current time
            const currentTime = new Date().getTime();
            const targetTime = new Date(targetDate).getTime();

            // Calculate the time difference
            const timeDifference = targetTime - currentTime;

            // Calculate days, hours, minutes, and seconds
            this.days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
            this.hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            this.minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            this.seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            // If the countdown reaches zero, stop the interval
            if (timeDifference <= 0) {
                clearInterval(this.intervalId);
                console.log('Countdown expired!');
            }
        }, 1000);
    }

        renderedCallback(){
        if(!this.isConfettiLoaded){
            loadScript(this, CONFETTI).then(()=>{
                this.isConfettiLoaded = true
                console.log("Loaded Successfully")
                const jsConfetti = new JSConfetti()
                jsConfetti.addConfetti()
            }).catch(error=>{
                console.error("Error loading CONFETTI", error)
            })
        }
    }

}