import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  displaying$ = new Subject<any>();

  constructor() { }

  setDisplay(display){
    this.displaying$.next(display);
    return display
  }
}
