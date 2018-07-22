import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { of } from 'rxjs';

import 'rxjs/add/operator/delay';
import { Restangular, RestangularModule } from 'ngx-restangular';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor(private restangular: Restangular) { }

  getPromotions(): Observable<Promotion[]> {
  return this.restangular.all('promotions').getList();
  
  
  }

  getPromotion(id: number): Observable<Promotion>{
  	return this.restangular.one('promotions',id).get();
    
    
  }

  getFeaturedPromotion(): Observable<Promotion>{
  	return this.restangular.all('promotions').getList({'featured':'true'}).pipe(map(promotion => promotion[0]));
    
  }
}
