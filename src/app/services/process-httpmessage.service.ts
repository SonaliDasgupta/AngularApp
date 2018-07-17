import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmessageService {

  constructor() { }

  public extractData(res: Response){
  	let body= res.json;
  	return body || {};
  }
}
