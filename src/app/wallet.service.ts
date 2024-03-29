import { Injectable } from '@angular/core';

import Web3 from "web3";
//import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

declare const window: any;
@Injectable({
  providedIn: 'root'
})
export class WalletService {

  provider: any;
  web3js: any;
  account: any;
  web3Modal;



  constructor() {
    const Web3Modal = window.Web3Modal.default;

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: "INFURA_ID" // required
        }
      }
    };

    this.web3Modal = new Web3Modal({
      network: "mainnet", // optional
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: "rgb(39, 49, 56)",
        main: "rgb(199, 199, 199)",
        secondary: "rgb(136, 136, 136)",
        border: "rgba(195, 195, 195, 0.14)",
        hover: "rgb(16, 26, 32)"
      }
    });
  }

  async connectAccount(){

    
    console.log(new Web3(window.web3.currentProvider));


    this.web3Modal.clearCachedProvider();

    // this.provider = await this.web3Modal.connect(); // set provider
    await this.web3Modal.connect();

    console.log(this.web3js);

    this.web3js.eth.net.getId().then(netId => {

      console.log(netId)

      if(netId == 56){
        let model = this.web3js.eth.accounts.create();

        this.web3js.setProvider('https://bsc-dataseed1.binance.org:443', "unspecified"); // set to Binance

        // Create MATIC Wallet
        this.web3js.eth.accounts.wallet.add({
          privateKey: model.privateKey,
          address: '0x47bB7d39cAfB02b67971eac4c44A24C67ccA7c79'
        }, reason => {
          console.error('Get MATIC Error: ' + reason); // Error!
        });

        return  new Web3(window.web3.currentProvider);
      }else{
        console.log('ON WRONG CHAIN')
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
