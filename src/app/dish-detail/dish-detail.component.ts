import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

import { MenuComponent } from '../menu/menu.component';
import { Params , ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DishService } from '../services/dish.service';
import 'rxjs/add/operator/switchMap';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Comment } from '../shared/comment';
import { Inject } from '@angular/core';

import { visibility, flyInOut, expand } from '../animations/app.animations';
//import { BrowserAnimationsModule } from '@angular/animations';


@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss'],
  host: {
 '[@flyInOut]':'true',
 'style':'display: block;'

 },

  animations:[
  	visibility(), flyInOut(), expand()
  ]
})

export class DishDetailComponent implements OnInit{

 	dish : Dish;
 	dishcopy = null;
 	dishIds: number[];
 	prev: number;
 	next: number;
 	commentsForm : FormGroup;

 	
 	formVal: Comment;
 	lastComment: Comment = null;

 	errMsg: string;
 	visibility= 'shown';

 	
 	
 	
 	

 	validationMessages= {
  	'author': {
  	'required':'Name is required',
  	'minLength': 'Name must be atleast two characters long',
  	'maxLength': 'Name cannot be more than 20 characters'
  	},
  	'comment': {
  	'required':'Comment is required',
  	'minLength': 'Comment must be atleast two characters long',
  	'maxLength': 'Comment cannot be more than 20 characters'
  	},
  	'rating':{}

  };

  formErrors= {
  'author':'',
  'comment':'',
  'rating': ''
  }

	

	constructor(private dishService : DishService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder, @Inject('BaseURL') private BaseURL ) {
		this.createForm();

	
	 }

	ngOnInit() {
		this.dishService.getDishIds().subscribe((dishIds: number[])=> this.dishIds=dishIds);
		this.route.params.switchMap((params: Params)=> { 
		this.visibility='hidden';
		return this.dishService.getDish(+params['id'])})
		 .subscribe(dish => { this.dish = dish; 
		 	console.log(dish);
			this.dishcopy=dish;
		 this.setPrevNext(dish.id);
		 this.visibility='shown';
		 }, errmess=> this.errMsg=errmess);

         


	 }

	 createForm() {
	 this.commentsForm= this.fb.group({
  	author: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(20)]],
  	comment: ['',[Validators.required, Validators.minLength(2),Validators.maxLength(20)]],
  	rating: 1
  	});

  	this.commentsForm.valueChanges.subscribe(data=> this.onValueChanged(data));
  	this.onValueChanged(); //(re)set form validation messages
  
	 }


	onValueChanged(data?: any){
  	if(!this.commentsForm){
  	return;
  	}
  	const form= this.commentsForm;
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



  	if(this.commentsForm.valid){
  	if(this.lastComment){
  	this.dish.comments= this.dish.comments.filter(value => value!=this.lastComment);
  	}
  	this.formVal=this.commentsForm.value;
  	this.formVal.date=(new Date()).toISOString();
  	this.dish.comments.push(this.formVal);
  	this.lastComment=this.formVal;

  	

  	
  	}

  	
  	else{

 
  	if(this.dish){
  	this.dish.comments= this.dish.comments.filter(value => value!=this.formVal);
  	
  	}
  		
  	}

  	


  }

	 setPrevNext(dishId: number){
	 let index= this.dishIds.indexOf(dishId);
	 this.prev=this.dishIds[(this.dishIds.length+index-1)%this.dishIds.length];
	 this.next=this.dishIds[(this.dishIds.length+index+1)%this.dishIds.length];

	 }

	 goBack(): void {
	 	this.location.back();
	 }

	 onSubmit(): void {
		
			
		this.formVal=null;
		this.dishcopy.comments.push(this.formVal);
		this.dishcopy.save().subscribe(dish => this.dish=dish);
		
		console.log(this.dish.comments);
  		this.commentsForm.reset({
  			author: '',
  			comment: '',
  			rating:1

	  		
  	}); 

	}

}
