import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import GOOGLE_BOOKS_API_KEY from '@salesforce/label/c.GoogleBooksApiKey';

const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
const API_KEY = GOOGLE_BOOKS_API_KEY;

export default class BookApp extends LightningElement {

    query = 'cats';
    books = [];
    timer;

    connectedCallback() {
        this.fetchBookData();
    }

    fetchBookData(){
        fetch(
            `${BOOK_URL}${encodeURIComponent(this.query)}&maxResults=12&key=${API_KEY}`
        )
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