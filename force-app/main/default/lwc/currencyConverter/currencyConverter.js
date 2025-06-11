import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList'
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets'

export default class CurrencyConverterApp extends LightningElement {

    currencyImage = currencyConverterAssets +'/currencyConverterAssets/currency.svg'
    countryList = countryCodeList
    countryFrom = "GBP"
    countryTo = "USD"
    amount = ''
    result
    error 

    handleChange(event) {
        const {name, value} = event.target
        console.log("name", name)
        console.log("value", value)
        this[name] = value
    }

    submitHandler(event) {
        event.preventDefault()
        this.convert()
    }

    async convert(){
        // const API_URL = `https://api.exchangerate.host/convert?from=${this.countryFrom}&to=${this.countryTo}`
        const API_KEY = 'd67d5159dbe1ef1187967136'
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`
        try{
            const data = await fetch(API_URL)
            const jsonData = await data.json()
            // this.result = (Number(this.amount) * jsonData.result).toFixed(2)
            this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2)
            console.log(this.result)
        } catch(error) {
            console.log(error)
            this.error = "An error occurred. Please try again..."
        }
    }
}