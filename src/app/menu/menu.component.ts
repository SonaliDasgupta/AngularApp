import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { DishService } from '../services/dish.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

 dishes: Dish[]; 
 comments : Comment[];
 errMess: string;


  constructor(private dishService: DishService, @Inject('BaseURL') private BaseURL) { 
  }

  ngOnInit() {
   this.dishService.getDishes().subscribe(dishes => this.dishes = dishes, errmess => this.errMess=<any>errmess);
  }

 

}
