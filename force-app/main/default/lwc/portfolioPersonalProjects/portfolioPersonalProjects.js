import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets'

export default class PortfolioPersonalProjects extends LightningElement {

    MemoryGame = `${PortfolioAssets}/PortfolioAssets/Projects/MemoryGame.png`
    BookListingApp = `${PortfolioAssets}/PortfolioAssets/Projects/BookListingApp.png`
    BMICalculator = `${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`
    AlarmClock = `${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`
    CurrencyCalculator = `${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`
    WeatherApp = `${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`
    SurveyApp = `${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`
    NoteApp = `${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`

    projects = [
        {
            "name":"Memory Game",
            "img":this.MemoryGame,
            "link":"https://alanmcclenaghan-portfolio-dev-ed.my.site.com/Portfolio/memory-game"
        },
        {
            "name":"Book Listing App",
            "img":this.BookListingApp,
            "link":"https://alanmcclenaghan-portfolio-dev-ed.my.site.com/Portfolio/book-listing-app"
        },
        {
            "name":"BMI Calculator App",
            "img":this.BMICalculator,
            "link":"https://alanmcclenaghan-portfolio-dev-ed.my.site.com/Portfolio/bmi-calculator"
        },
        {
            "name":"Alarm Clock App",
            "img":this.AlarmClock,
            "link":"https://alanmcclenaghan-portfolio-dev-ed.my.site.com/Portfolio/alarm-clock"
        },
        {
            "name":"Curreny Converter App",
            "img":this.CurrencyCalculator,
            "link":"https://alanmcclenaghan-portfolio-dev-ed.my.site.com/Portfolio/currency-converter"
        },
        {
            "name":"Weather App",
            "img":this.WeatherApp,
            "link":"https://alanmcclenaghan-portfolio-dev-ed.my.site.com/Portfolio/weather-app"
        },
        {
            "name":"Survey App",
            "img":this.SurveyApp,
            "link":"https://alanmcclenaghan-portfolio-dev-ed.my.site.com/survey/survey/runtimeApp.app?invitationId=0Ki4L000000gO5r&surveyName=employee_survey&UUID=929fabfe-1efa-4d54-b858-32018785480e"
        },
        {
            "name":"Note Taking App",
            "img":this.NoteApp,
            "link":"https://alanmcclenaghan-portfolio-dev-ed.my.site.com/Portfolio/note-taking-app"
        }
    ]

}