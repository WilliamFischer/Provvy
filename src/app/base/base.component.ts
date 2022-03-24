import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {

  display :  string = '';

  constructor(public master : MasterService) { }

  ngOnInit(): void {
    this.getDisplay();
  }

  getDisplay(){
    this.master.displaying$.subscribe(d => this.display = d);
  }

  setDisplay(display){
    this.master.setDisplay(display);
  }

}
