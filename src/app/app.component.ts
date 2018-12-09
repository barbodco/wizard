import { Component } from '@angular/core';
declare var console;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	step1;
	step2;
	step3;
	step4;
  reviewMode: boolean = false;
	console = console;
  totalStatus: boolean = false;
  ngOnInit(){
  	this.initSteps();
  }
  goActivate(event){
  	if (!event) {
  		event = 1; 
  	}

    // check if previus step is completed
    let s = `step${event}`;
        this.resetSteps();
        this[s].active = true;
        this[s].status = 'pending';

  }
  // preReview(){
  //     let totalStatus = this.step1.status === 'finished' || this.step2.status === 'finished'||this.step3.status === 'finished'
  //    return totalStatus;
  // }
  resetSteps(){
  	this.step1.active = false;
  	this.step1.status = 'none';

  	this.step2.active = false;
  	this.step2.status = 'none';

  	this.step3.active = false;
  	this.step3.status = 'none';
  }
  doneWithAllSteps(){

  }
  initSteps(){
  	this.step1 = {
  		title: "basic info",
  		stepNumber: 1,
  		active: true,
  		description: "Duis convallis turpis ac commodo rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet leo id auctor pellentesque.",
  		status: "pending", // none, pending, finished
  		details: [
  			{
  				bindTo: "firstName",
  				name: "First Name",
  				value: "",
  				placeHolder: ""
  			},
  			{
  				bindTo: "lastName",
  				name: "Last Name",
  				value: "",
  				placeHolder: ""
  			},
  			{
  				bindTo:"emailAddress",
  				name: "Email Address",
  				value: "",
  				placeHolder: ""
  			},
  			{
  				bindTo:"phoneNumber",
  				name: "Phone Number",
  				value: "",
  				placeHolder: ""
  			}]
	}
	this.step2 = {
  		title: "Address Info",
  		description: "Duis convallis turpis ac commodo rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet leo id auctor pellentesque.",
  		stepNumber: 2,
  		active: false,
  		status: "none", // none, pending, finished
  		details: [
  			{
  				bindTo: "street1",
  				name: "Street 1",
  				value: "",
  				placeHolder: ""
  			},
  			{
  				bindTo: "street2",
  				name: "Street 2",
  				value: "",
  				placeHolder: "Apartment/Unit Number"
  			},
  			{
  				bindTo:"city",
  				name: "City",
  				value: "",
  				placeHolder: ""
  			},
  			{
  				bindTo:"state",
  				name: "State",
  				value: "",
  				placeHolder: ""
  			},
  			{
  				bindTo:"zipCode",
  				name: "Zip Code",
  				value: "",
  				placeHolder: "eg. 1245-RG"
  			}]
	}
	this.step3 = {
  		title: "Comment",
  		description: "Duis convallis turpis ac commodo rutrum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet leo id auctor pellentesque.",
  		stepNumber: 3,
  		active: false,
  		type: 'dropdown',
  		status: "none", // none, pending, finished
  		details: [
  			{
  				bindTo: "staffFeedback",
  				name: "Staff Feedback",
  				value: "",
  				placeHolder: "",
  				type: 'select',
  				index: 1
  			},
  			{
  				bindTo: "checkoutFeedback",
  				name: "Checkout Feedback",
  				value: "",
  				placeHolder: "",
  				type: 'select',
  				index: 2
  			},
  			{
  				bindTo:"productFeedback",
  				name: "Product Feedback",
  				value: "",
  				placeHolder: "",
  				type: 'select',
  				index: 3
  			}]
	}
	// this.step4 = {
 //  		title: "Review",
 //  		stepNumber: 4,
 //  		type: 'review',
 //  		active: false,
 //  		status: "none", // none, pending, finished
 //  		details: []
	// }
  }


}
