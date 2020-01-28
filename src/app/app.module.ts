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
import { GameComponent } from './game/game.component';
import { AlertButtonComponent } from './alert-button/alert-button.component';
import { RecommendsComponent } from './recommends/recommends.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QAndAComponent,
    GameComponent,
    AlertButtonComponent,
    RecommendsComponent
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
