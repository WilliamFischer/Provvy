import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { ArtistCreationCenterComponent } from './artist-creation-center/artist-creation-center.component';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ArtistCreationCenterComponent,
    BaseComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
