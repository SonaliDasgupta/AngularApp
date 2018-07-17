import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { of } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';

import { map } from 'rxjs/operators';

import { Dish } from '../shared/dish';

import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmessageService } from './process-httpmessage.service';
import { Comment } from '../shared/comment';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  dishes: Dish[];

  constructor(private http: HttpClient, private processHttpMessageService : ProcessHttpmessageService) { }

  getDishes(): Observable<Dish[]> {
  return this.http.get<Dish[]>(baseURL+ 'dishes');
  }

  getDish(id: number): Observable<Dish>{
  	return this.http.get<Dish>(baseURL+'dishes/'+id);
  
  }

 /* getComments(id: number): Observable<Comment[]>{
  return of((DISHES.filter(dish=> dish.id==id)[0]).comments);
  }*/

  getFeaturedDish(): Observable<Dish>{
  	return this.http.get<Dish>(baseURL+'dishes?featured=true').pipe(map(dish => dish[0]));
  }

  getDishIds(): Observable<number[] | any>{
    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
}
