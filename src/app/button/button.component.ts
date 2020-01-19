import { Component, OnInit } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})

export class ButtonComponent implements OnInit {

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {
  };
  
  public klick() {
    var valdrop = (<HTMLInputElement>document.getElementById('dropdown')).value;
    let kldrpdwn = document.querySelector(".abstand");

    if (valdrop == "first") {
      console.log("bin first");
      kldrpdwn.classList.remove("bg2");
      kldrpdwn.classList.remove("bg3");
      kldrpdwn.classList.add('bg1');
    }
    else if (valdrop == "second") {
      console.log("bin sec");
      kldrpdwn.classList.remove("bg1");
      kldrpdwn.classList.remove("bg3");
      kldrpdwn.classList.add('bg2');
    }
    else if (valdrop == "third") {
      console.log("bin thir");
      kldrpdwn.classList.remove("bg1");
      kldrpdwn.classList.remove("bg2");
      kldrpdwn.classList.add('bg3');
    };

    let kltrans = document.querySelector(".para");
    kltrans.classList.add('transparent');

  };

  public resetbut() {
    let kldrpdwn = document.querySelector(".abstand").classList;
    console.log("davor", kldrpdwn);
    kldrpdwn.remove("bg1");
    kldrpdwn.remove("bg2");
    kldrpdwn.remove("bg3");
    console.log("danach", kldrpdwn);

    let kltrans = document.querySelector(".para").classList;
    kltrans.remove('transparent');
  };
}