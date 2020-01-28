import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-button',
  templateUrl: './alert-button.component.html',
  styleUrls: ['./alert-button.component.css']
})
export class AlertButtonComponent implements OnInit {

  content     = 'Die Antwort auf alles:';
  hideContent = true;
  severity    = 42;

  name = ""
  value = ""

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.hideContent = !this.hideContent;
  }

  //Die Keks-Funktionen erstellen, lesen und löschen einen Cookie auf der Seite
  Keks_backen() {
    this.name = (<HTMLInputElement>document.getElementById("Keks-fabrik")).value;
    this.value = (<HTMLInputElement>document.getElementById("Kekse")).value;
    const date = new Date();
    

    // Set it expire in 7 days
    date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = this.name+"="+this.value+"; expires="+date.toUTCString()+"; path=/";
    console.log(document.cookie)
  }

  Keks_servieren() {
      this.name = (<HTMLInputElement>document.getElementById("Keks-fabrik")).value;
      const value = "; " + document.cookie;
      const parts = value.split("; " + this.name + "=");
      
      console.log(parts)

      if (parts.length == 2) {
          return parts.pop().split(";").shift();
      }
      
  }

  Keks_essen() {
      this.name = (<HTMLInputElement>document.getElementById("Keks-fabrik")).value;
      const date = new Date();

      // Set it expire in -1 days
      date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

      // Set it
      console.log(this.name)
      document.cookie = this.name+"=; expires="+date.toUTCString()+"; path=/";
      
      if(document.cookie === ""){
        console.log("Keine Kekse mehr da, alle gegessen")
      }
  }

}
