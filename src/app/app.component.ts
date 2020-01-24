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
    if (target=== '/landing') {
      window.location.reload();
    }

    this.view = target;
  }

  public onClickFeedbackEntry() {
    alert('Feedback wurde abgesendet') ;
  };

  public onClickSendFeedback() {
    this.view = '/feedback';
    this.navBarData.menuEntries = [{
      isActive: false,
      text: 'Home',
      href: '/landing',
    },
    {
      isActive: false,
      text: 'Aktuell',
      href: '/aktuell',
    },
    {
      isActive: false,
      text: 'Tier Quiz',
      href: '/tierquiz',
    },
    {
      isActive: true,
      text: 'Feedback',
      href: '/feedback',
    },
    {
      isActive: false,
      text: 'Contact',
      href: '/contact',
    }
    
  ];
    href:'/feedback';
  };

  public onClickImpressum() {
    this.view = '/contact';
    this.navBarData.menuEntries = [{
      isActive: false,
      text: 'Home',
      href: '/landing',
    },
    {
      isActive: false,
      text: 'Aktuell',
      href: '/aktuell',
    },
    {
      isActive: false,
      text: 'Tier Quiz',
      href: '/tierquiz',
    },
    {
      isActive: false,
      text: 'Feedback',
      href: '/feedback',
    },
    {
      isActive: true,
      text: 'Contact',
      href: '/contact',
    }
    
  ];
    href:'/contact';
  };

  public onClickBack() {
    this.view = '/landing';
    this.navBarData.menuEntries = [{
      isActive: true,
      text: 'Home',
      href: '/landing',
    },
    {
      isActive: false,
      text: 'Aktuell',
      href: '/aktuell',
    },
    {
      isActive: false,
      text: 'Tier Quiz',
      href: '/tierquiz',
    },
    {
      isActive: false,
      text: 'Feedback',
      href: '/feedback',
    },
    {
      isActive: false,
      text: 'Contact',
      href: '/contact',
    }
    
  ];
    href:'/landing';
  };
 
  
/*public onClickSendFeedback(target:string) {
  if (target =! /'feedback'){ 
    window.open('./feedback');

  }
  this.view=target; 
 }
  */
 
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
        text: 'Aktuell',
        href: '/aktuell',
      },
      {
      isActive: false,
        text: 'Tier Quiz',
        href: '/tierquiz',
      },
      {
        isActive: false,
        text: 'Feedback',
        href: '/feedback',
      },
      {
        isActive: false,
        text: 'Contact',
        href: '/contact',
      }
      
        ]
    };
  }
}
