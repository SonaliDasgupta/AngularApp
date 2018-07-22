import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { of } from 'rxjs';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';
import { Restangular,RestangularModule} from 'ngx-restangular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor(private restangular : Restangular) { }

  getLeaders() : Observable<Leader[]> {
  	return this.restangular.all('leaders').getList();
    
  }

  getLeader(id: number): Observable<Leader> {
  return this.restangular.one('leaders',id).get();
  
  }

  getFeaturedLeader(): Observable<Leader>{
  return this.restangular.all('leaders').getList({'featured':'true'}).pipe(map(leader=> leader[0]));
  
}}
