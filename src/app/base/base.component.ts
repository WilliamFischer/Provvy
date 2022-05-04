import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { WalletService } from '../wallet.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  display: string = 'landing';

  constructor(
    public master: MasterService,
    public walletService: WalletService
  ) {}

  ngOnInit(): void {
    this.getDisplay();
  }

  getDisplay() {
    this.master.displaying$.subscribe((d) => (this.display = d));
  }

  setDisplay(display) {
    this.master.setDisplay(display);
  }

  async connectToMetaMask() {
    await this.walletService.connectAccount();
  }
}
