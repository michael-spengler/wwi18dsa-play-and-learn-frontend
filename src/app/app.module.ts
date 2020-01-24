import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ImpressumModule } from 'german-impressum';
import { DpsModule } from 'german-data-protection-statement';
import { NavbarModule } from 'ng-responsive-navbar';
import { DisclaimerModule } from 'german-legal-disclaimer';
import { NgQAndAModule } from 'ng-q-and-a';
import { QAndAComponent } from './q-and-a/q-and-a.component';
import { NickComponent } from './nick/nick.component';
import { Nick2Component } from './nick2/nick2.component';





@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QAndAComponent,
    NickComponent,
    Nick2Component,
  ],
  imports: [
    DpsModule,
    NgQAndAModule,
    ImpressumModule,
    DisclaimerModule,
    NavbarModule,
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
