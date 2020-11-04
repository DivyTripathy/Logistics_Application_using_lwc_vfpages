import { LightningElement,api, wire } from 'lwc';
import getAlldetails from '@salesforce/apex/customerdetails.getAlldetails';
export default class gettingCusomerDetails extends LightningElement {
	@wire(getAlldetails) customers;
	
	
}