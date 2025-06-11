import { LightningElement, api } from 'lwc';
import ursusResources from '@salesforce/resourceUrl/ursus_park';
export default class AccountTile extends LightningElement {
	@api account;
    handleOpenRecordClick() {
        const selectEvent = new CustomEvent('accountview', {
            detail: this.account.Id
        });
        this.dispatchEvent(selectEvent);
    }
}