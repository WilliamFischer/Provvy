import { Component, OnInit } from '@angular/core';


import { faSquare, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { MasterService } from 'src/app/master.service';


@Component({
  selector: 'app-little-filter',
  templateUrl: './little-filter.component.html',
  styleUrls: ['./little-filter.component.scss']
})
export class LittleFilterComponent implements OnInit {

  faSquare = faSquare;
  faThLarge = faThLarge;

  gridView = 1;

  constructor(public master: MasterService) {
    this.master.gridViewSub$.subscribe((nft) => this.gridView = nft);
  }

  ngOnInit(): void {
  }

  changeView(to) {
    this.master.setGridView(to)
  }

}
