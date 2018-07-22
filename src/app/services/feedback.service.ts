import { Injectable } from '@angular/core';
import { Feedback } from '../shared/feedback';
import { Restangular, RestangularModule} from 'ngx-restangular';
import { Observable } from 'rxjs';
import 'rxjs/observable/of';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  constructor(private restangular: Restangular) { }

  submitFeedback(feedback: Feedback): Observable<Feedback>{
  	this.restangular.all('feedback').post(feedback);
  	return this.restangular.all('feedback').getList({email: feedback.email}).pipe(map(feedback => feedback[0]));
  }
}
