import { Component, Input, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { MenuComponent } from '../menu/menu.component';
@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})

export class DishDetailComponent implements OnInit{

 	@Input() dish : Dish;

	//comments : Comment[] 

	constructor() {
	//	comments= this.dish.comments;
	 }

	ngOnInit() { }

}
