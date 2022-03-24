import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(public master : MasterService, public router : Router) { }

  ngOnInit(): void {
  }

  setDisplay(display){
    this.master.setDisplay(display);
  }
}
