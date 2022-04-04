import { Injectable } from '@angular/core';

import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  provider: any;
  web3js: any;
  account: any;
  web3Modal: any;

  constructor() {
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
    this.web3Modal.clearCachedProvider();

    // this.provider = await this.web3Modal.connect(); // set provider
    await this.web3Modal.connect();

    this.web3js.eth.net.getId().then(netId => {

      console.log(netId)
      
      if(netId == 56){
        let model = this.web3js.eth.accounts.create();

        this.web3js.setProvider('https://bsc-dataseed1.binance.org:443', "unspecified"); // set to Binance
    
        // Create Gacha Wallet
        this.web3js.eth.accounts.wallet.add({
          privateKey: model.privateKey,
          address: '0x4f4755D79c5c6f8987791cC5f6c4f3F414529Bd2'
        }, reason => {
          console.error('Get GACHA Error: ' + reason); // Error!
        });
    
        // Create Gacha Premium Wallet
        this.web3js.eth.accounts.wallet.add({
            privateKey: model.privateKey,
            address: '0x9509df81196c2376ad6c4c447dE29B09559A6f2B'
        }, reason => {
          console.error('Get GACHA+ Error: ' + reason); // Error!
        });

        this.saveUser();
      }else{
        console.log('ON WRONG CHAIN')
      }
    })
  }

  saveUser(){
    alert('DONE!')
  }
}
