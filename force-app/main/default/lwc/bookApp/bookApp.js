import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

export default class BookApp extends LightningElement {

    query = 'cats';
    books;
    timer;

    connectedCallback() {
        this.fetchBookData();
    }

    fetchBookData(){
        fetch(BOOK_URL + this.query)
        .then(response=>response.json())
        .then(data=>{
            if (data.error) {
                throw new Error(data.error.message)
            }
            console.log(data);
            this.books = data;
        })
        .catch(error=>{
            this.showToast(
                    'Error Fetching books', 
                    error?.message || 'Unknown error', 
                    'error')
            })
        }

    fetchBooksHandler(event) {
        this.query = event.target.value;
        window.clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.fetchBookData();
        }, 1000)
    }

    showToast(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant:variant || 'success'
        }))
    }

}