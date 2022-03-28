import { Component, OnInit } from '@angular/core';
import { faFilter, faArrowLeft, faArrowRight, faAngleUp, faAngleDown, faHome } from '@fortawesome/free-solid-svg-icons';
import { MasterService } from 'src/app/master.service';

@Component({
  selector: 'app-big-filter',
  templateUrl: './big-filter.component.html',
  styleUrls: ['./big-filter.component.scss']
})
export class BigFilterComponent implements OnInit {

  faFilter = faFilter;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faAngleUp = faAngleUp;
  faAngleDown = faAngleDown;
  faHome = faHome;

  showSideFilter: boolean = true;
  displayingNFT: string = '';

  constructor(public master: MasterService) {
    this.master.showSideFilter$.subscribe((show) => this.showSideFilter = show);
    this.master.nftSub$.subscribe((nft) => this.displayingNFT = nft);
  }

  ngOnInit(): void { }

  toggleSideFilter() {
    this.master.toggleSideFilter(!this.showSideFilter);
  }

  clearNFT() {
    this.master.toggleSideFilter(true);
    this.master.setNFT('');
  }

}
