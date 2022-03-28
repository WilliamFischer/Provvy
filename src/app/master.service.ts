import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  displaying$ = new Subject<any>();
  showSideFilter$ = new Subject<any>();
  nftSub$ = new Subject<any>();
  gridViewSub$ = new Subject<any>();

  constructor() { }

  setDisplay(display){
    this.displaying$.next(display);
    return display;
  }

  toggleSideFilter(show){
    this.showSideFilter$.next(show);
    return show;
  }

  setNFT(nft){
    this.nftSub$.next(nft);
    return nft;
  }

  setGridView(view){
    this.gridViewSub$.next(view);
    return view;
  }
}
