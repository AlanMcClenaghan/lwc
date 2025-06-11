import { NavigationMixin } from 'lightning/navigation';
import { LightningElement, wire } from 'lwc';
import searchContacts from '@salesforce/apex/technicianController.searchContacts';
export default class technicianList extends NavigationMixin(LightningElement) {
	searchTerm = '';
	@wire(searchContacts, {searchTerm: '$searchTerm'})
	contacts;
	handleSearchTermChange(event) {
		// Debouncing this method: do not update the reactive property as
		// long as this function is being called within a delay of 300 ms.
		// This is to avoid a very large number of Apex method calls.
		window.clearTimeout(this.delayTimeout);
		const searchTerm = event.target.value;
		// eslint-disable-next-line @lwc/lwc/no-async-operation
		this.delayTimeout = setTimeout(() => {
			this.searchTerm = searchTerm;
		}, 300);
	}
	get hasResults() {
		return (this.contacts.data.length > 0);
	}
	handleAccountView(event) {
		// Get bear record id from bearview event
		const contactId = event.detail;
		// Navigate to bear record page
		this[NavigationMixin.Navigate]({
			type: 'standard__recordPage',
			attributes: {
				recordId: contactId,
				objectApiName: 'contact',
				actionName: 'view',
			},
		});
	}
}