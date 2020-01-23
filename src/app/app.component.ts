import { Component } from '@angular/core';
import { INavbarData } from 'ng-responsive-navbar';
import { getCurrencySymbol } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gruppenprojekt';

  public navBarData: INavbarData;
  public view = '/landing';

  public constructor() {
    this.navBarData = this.getNavBarData();
  }

  public onClickMenuEntry(target: string) {
    if (target === '/landing') {
      window.location.reload();
    }

    this.view = target;
  }

  private getNavBarData(): INavbarData {
    return {
      // replace the following by your data...
      logoURL: 'https://www.thesun.co.uk/wp-content/uploads/2017/05/nintchdbpict0003267145421.jpg',
      appTitle: 'Unsere tolle Website',
      menuEntries: [{
        isActive: true,
        text: 'Startseite',
        href: '/landing',
      },
      {
        isActive: false,
        text: 'Gelaber',
        href: '/Gelaber',
      },
      {
        isActive: false,
        text: 'Surprise',
        href: '/button',
      },
      {
        isActive: false,
        text: 'Snake',
        href: '/snake',
      },
      {
        isActive: false,
        text: 'Kontakt',
        href: '/contact2',
      }]
    };
  }
}
