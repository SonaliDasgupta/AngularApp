import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { Promotion } from '../shared/promotion';
import { Leader } from '../shared/leader';

import { DishService } from '../services/dish.service';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	dish: Dish;
	promotion: Promotion;
	leader: Leader;
  errDish: string;
  errPromotion: string;
  errLeader: string;
	
  constructor(private dishService: DishService, private promotionService:PromotionService, private leaderService: LeaderService, @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
  this.dishService.getFeaturedDish().subscribe(dish=> this.dish = dish, errMsg=> this.errDish=errMsg);
  this.promotionService.getFeaturedPromotion().subscribe(promotion => this.promotion = promotion, errMsg => this.errPromotion=errMsg);
  this.leaderService.getFeaturedLeader().subscribe(leader => this.leader = leader, errMsg => this.errLeader=errMsg);
  }

}
