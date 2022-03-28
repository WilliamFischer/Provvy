import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { MasterService } from 'src/app/master.service';

@Component({
  selector: 'app-nft-grid',
  templateUrl: './nft-grid.component.html',
  styleUrls: ['./nft-grid.component.scss']
})
export class NftGridComponent implements OnInit {

  showSideFilter: boolean = true;
  displayingNFT: string = '';
  gridView: number = 1;
  faHeart = faHeart;

  constructor(public master: MasterService) {
    this.master.showSideFilter$.subscribe((show) => this.showSideFilter = show);
    this.master.nftSub$.subscribe((nft) => this.displayingNFT = nft);
    this.master.gridViewSub$.subscribe((nft) => this.gridView = nft);
  }

  ngOnInit(): void {
  }

  showNFT(nft){
    this.master.toggleSideFilter(false);
    this.master.setNFT(nft);
  }

}
