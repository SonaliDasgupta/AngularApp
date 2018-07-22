import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Feedback, ContactType} from '../shared/feedback';

import { FeedbackService } from '../services/feedback.service';
import { visibility, flyInOut, expand } from '../animations/app.animations';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  host: {
 '[@flyInOut]':'true',
 'style':'display: block;'

 },
 animations: [ flyInOut(), expand(), visibility()]
})
export class ContactComponent implements OnInit {

  feedbackForm : FormGroup;
  feedback: Feedback = null;

  visibility='shown';
  visibility_data='hidden';
  errMsg: string;
  submitted=false;

  
  contactType = ContactType;
  formErrors= {
  	'firstname': '',
  	'lastname': '',
  	'telnum': '',
  	'email': ''
  };

  validationMessages= {
  	'firstname': {
  	'required':'First name is required',
  	'minLength': 'First name must be atleast two characters long',
  	'maxLength': 'First name cannot be more than 20 characters'
  	},
  	'lastname': {
  	'required':'Last name is required',
  	'minLength': 'Last name must be atleast two characters long',
  	'maxLength': 'Last name cannot be more than 20 characters'
  	},
  	'telnum': {
  	'required':'Tel no. is required',
  	'pattern': 'Tel no. must contain only numbers'
  	},
  	'email': {
  	'required': 'email is required',
  	'email': 'Email not in valid format'
  	}

  };

  

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) { 
  this.createForm();
  }

  ngOnInit() {
  this.visibility='shown';
  this.visibility_data='hidden';
  this.feedback=null;
  }

  createForm(){
  	this.feedbackForm= this.fb.group({
  	firstname: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(20)]],
  	lastname: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(20)]],
  	telnum: [0,[Validators.required, Validators.pattern]],
  	email: ['',[Validators.required, Validators.email]],
  	agree: false,
  	contacttype: 'None',
  	message: ''
  	});

  	this.feedbackForm.valueChanges.subscribe(data=> this.onValueChanged(data));
  	this.onValueChanged(); //(re)set form validation messages
  }

  onValueChanged(data?: any){
  	if(!this.feedbackForm){
  	return;
  	}
  	const form= this.feedbackForm;
   
  	for (const field in this.formErrors){
  		this.formErrors[field]='';
  		const control= form.get(field);
  		if(control && control.dirty && !control.valid){
  			const messages=this.validationMessages[field];
  			for( const key in control.errors){
  			this.formErrors[field]+=messages[key]+' ';
  			}
  		}
  	}
  }

 



  onSubmit() {
  	
  	this.submitted=true;
  	this.feedbackService.submitFeedback(this.feedbackForm.value).subscribe(feedback => {this.feedback=feedback; 
  	this.visibility='hidden';
  	this.visibility_data='shown';
  	console.log(this.feedback);

  	window.setTimeout(()=>{
  	 this.visibility='shown';
  	 this.visibility_data='hidden';
  	 this.submitted=false;
  	 this.feedback=null;
  	 this.feedbackForm.reset({
  	firstname: '',
  	lastname: '',
  	telnum: 0,
  	email: '',
  	agree: false,
  	contacttype: 'None',
  	message: ''
  	});

  	},5000);
 

  	}, error => this.errMsg=error);
  	
 
  	
  	

  	


  }

 

  

}
