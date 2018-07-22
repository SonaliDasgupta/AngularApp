import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

  

export class WindowRefService {


	constructor(){ }
   nativeWindow() : any {
      return  this._window();
   }

   _window() : any {
   // return the global native browser window object
   return window;
}
}

