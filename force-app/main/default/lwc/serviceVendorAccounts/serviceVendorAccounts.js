import { LightningElement, wire } from 'lwc';
import { reduceErrors } from 'c/ldsUtils';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import CITY_FIELD from '@salesforce/schema/Account.BillingCity';
import getServiceVendorAccounts from '@salesforce/apex/ServiceVendorAccountsController.getServiceVendorAccounts';
const COLUMNS = [
    { label: 'Account Name', fieldName: NAME_FIELD.fieldApiName, type: 'text', cellAttributes:{
        class: 'slds-text-color_success slds-text-title_caps'
    } },
    { label: 'Annual Revenue', fieldName: REVENUE_FIELD.fieldApiName, type: 'currency' },
    { label: 'Industry', fieldName: INDUSTRY_FIELD.fieldApiName, type: 'text' },
    { label: 'Billing City', fieldName: CITY_FIELD.fieldApiName, type: 'text' }
];
export default class AccountList extends LightningElement {
    columns = COLUMNS;
    @wire(getServiceVendorAccounts)
    accounts;
    get errors() {
        return (this.accounts.error) ?
            reduceErrors(this.accounts.error) : [];
    }
}