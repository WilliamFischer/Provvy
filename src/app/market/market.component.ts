import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.scss']
})
export class MarketComponent implements OnInit {

  showSideFilter: boolean = true;
  displayingNFT: string = '';

  constructor(public master: MasterService) {
    this.master.showSideFilter$.subscribe((show) => this.showSideFilter = show);
    this.master.nftSub$.subscribe((nft) => this.displayingNFT = nft);
  }

  ngOnInit(): void {}

}
