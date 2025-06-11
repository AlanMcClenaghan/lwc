import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import fontawesome from '@salesforce/resourceUrl/fontawesome';

export default class MemoryGame extends LightningElement {

    isLibraryLoaded = false;
    moves = 0;
    totalTime = '00:00';
    timerRef;
    showCongratulations = false;
    openedCards = [];
    matchedCards = [];

    cards= [
        {id:1, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:2, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:3, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:4, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:5, listClass:"card", type:'cube', icon:'fa fa-cube'},
        {id:6, listClass:"card", type:'anchor', icon:'fa fa-anchor'},
        {id:7, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:8, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:9, listClass:"card", type:'diamond', icon:'fa fa-diamond'},
        {id:10, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:11, listClass:"card", type:'leaf', icon:'fa fa-leaf'},
        {id:12, listClass:"card", type:'bomb', icon:'fa fa-bomb'},
        {id:13, listClass:"card", type:'bolt', icon:'fa fa-bolt'},
        {id:14, listClass:"card", type:'bicycle', icon:'fa fa-bicycle'},
        {id:15, listClass:"card", type:'plane', icon:'fa fa-paper-plane-o'},
        {id:16, listClass:"card", type:'cube', icon:'fa fa-cube'},
      ]

    get gameRating(){
        let stars =  this.moves < 12 ? [1,2,3]:this.moves>=13 ? [1,2]:[1]
        return this.matchedCards.length === 16 ? stars :[]
    }

    displayCard(event) {
        let currentCard = event.target;
        currentCard.classList.add("open", "show", "disabled");
        console.log('Current Card: ' + currentCard)
        console.log('Opened Cards: ' + this.openedCards)
        this.openedCards = [...this.openedCards, currentCard];
        console.log('Opened Cards: ' + this.openedCards)
        const length = this.openedCards.length;
        console.log('Opened Cards Length: ' + length);
        if (length === 2) {
            console.log('Length === 2');
            this.moves = this.moves + 1;
            if(this.moves === 1){
                this.timer();
            }
            if (this.openedCards[0].type === this.openedCards[1].type) {
                console.log('Types match');
                console.log('Opened Card 1: ' + this.openedCards[0]);
                console.log('Opened Card 2: ' + this.openedCards[1]);
                console.log('Matched Cards: ' + this.matchedCards)
                this.matchedCards = this.matchedCards.concat(this.openedCards[0], this.openedCards[1]);
                console.log('Matched Cards: ' + this.matchedCards)
                this.matched();
            } else {
                this.unmatched();
            }
        }
    }

    matched() {
        this.openedCards[0].classList.add("match", "disabled");
        this.openedCards[1].classList.add("match", "disabled");
        this.openedCards[0].classList.remove("show", "open");
        this.openedCards[1].classList.remove("show", "open");
        this.openedCards = [];
        console.log('Matched Cards: ' + this.matchedCards)
        if(this.matchedCards.length === 16){
            window.clearInterval(this.timerRef)
            this.showCongratulations = true;
        }
    }

    unmatched() {
        this.openedCards[0].classList.add("unmatched");
        this.openedCards[1].classList.add("unmatched");
        this.action('DISABLE');

        setTimeout( () => {
            this.openedCards[0].classList.remove("show", "open", "unmatched");
            this.openedCards[1].classList.remove("show", "open", "unmatched");
            this.action('ENABLE');
            this.openedCards = [];
        }, 1000)
    }

    action(action) {
        let cards = this.template.querySelectorAll('.card');
        Array.from(cards).forEach(item => {
            if (action === 'ENABLE') {
                let isMatch = item.classList.contains('match');
                if (!isMatch) {
                    item.classList.remove('disabled');
                }
            }
            if (action === 'DISABLE') {
                item.classList.add('disabled');
            }
        })
    }

    timer(){
        let startTime = new Date()
        this.timerRef = setInterval(()=>{
          let diff = new Date().getTime() - startTime.getTime()
          let d = Math.floor(diff/1000)
          const m = Math.floor(d % 3600 / 60);
          const s = Math.floor(d % 3600 % 60);
          const mDisplay = m>0 ? m+(m===1? "minute, ":" minutes, "):""
          const sDisplay = s>0 ? s+(s===1? "second":" seconds"):""
          this.totalTime = mDisplay + sDisplay
        }, 1000)
    }

    shuffle(){
        this.showCongratulations = false
        this.openedCards =[]
        this.matchedCards = []
        this.totalTime='00:00'
        this.moves=0
        window.clearInterval(this.timerRef)
        let elem = this.template.querySelectorAll('.card')
        Array.from(elem).forEach(item=>{
            item.classList.remove("show", "open", "match", "disabled")
        })
        /***shuffling and swapping logic */
        let array = [...this.cards]
        let counter = array.length
        while(counter>0){
            let index = Math.floor(Math.random()*counter)
            counter--

            let temp = array[counter]
            array[counter] = array[index]
            array[index] = temp
        }
        this.cards = [...array]
      }

    renderedCallback() {
        if (this.isLibraryLoaded) {
            return
        } else {
            loadStyle(this, fontawesome+'/fontawesome/css/font-awesome.min.css').then( () => {
                console.log("Loaded Successfully!");
            }).catch( error => {
                console.error(error);
            })
            this.isLibraryLoaded = true;
        }
    }
}