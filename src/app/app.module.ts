import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage, StorageModule } from '@angular/fire/storage';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { ArtistCreationCenterComponent } from './artist-creation-center/artist-creation-center.component';
import { BaseComponent } from './base/base.component';
import { MarketComponent } from './market/market.component';
import { BigFilterComponent } from './tools/big-filter/big-filter.component';
import { LittleFilterComponent } from './tools/little-filter/little-filter.component';
import { NftGridComponent } from './tools/nft-grid/nft-grid.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ArtistCreationCenterComponent,
    BaseComponent,
    MarketComponent,
    BigFilterComponent,
    LittleFilterComponent,
    NftGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyAl-Uxl92We0nJ-cytP6NCG45fgMm7gg5Y",
      authDomain: "provvy-588f3.firebaseapp.com",
      projectId: "provvy-588f3",
      storageBucket: "provvy-588f3.appspot.com",
      messagingSenderId: "293025177135",
      appId: "1:293025177135:web:2cc2280d2e09b3c754f0da",
      measurementId: "G-HPGVCLVBL4"
    })),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    StorageModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
