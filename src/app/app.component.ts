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

    alert(target)
    this.view = target;
  }

  private getNavBarData(): INavbarData {
    return {
      
      logoURL: 'http://wwi18dsa.de/getAsset/logo',
      appTitle: 'Landjugend Krauchenwies',
      menuEntries: [{
        isActive: true,
        text: 'Startseite',
        href: '/landing',
      },
      {
        isActive: false,
        text: 'Mitglieder',
        href: '/mitglieder ',
      },
      {
        isActive: false,
        text: 'Kontakt',
        href: '/contact',
      }]
    };
  }
}
