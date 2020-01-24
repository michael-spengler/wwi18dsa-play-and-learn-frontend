import { Component } from '@angular/core';
import { INavbarData } from 'ng-responsive-navbar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'play-and-learn-frontend';

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
      logoURL: 'http://wwi18dsa.de/getAsset/logo',
      appTitle: 'Play And Learn',
      menuEntries: [{
        isActive: true,
        text: 'Home',
        href: '/landing',
      },
      {
        isActive: false,
        text: 'Menu Entry 2',
        href: '/menuEntry2',
      },
      {
        isActive: false,
        text: 'Dashboard',
        href: '/nick',
      },
      {
        isActive: false,
        text: 'Join us',
        href: '/nick2',
      },
      {
        isActive: false,
        text: 'Contact',
        href: '/contact',
      }]
    };
  }
}
