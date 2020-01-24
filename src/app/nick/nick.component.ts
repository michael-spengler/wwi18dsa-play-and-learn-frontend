import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nick',
  templateUrl: './nick.component.html',
  styleUrls: ['./nick.component.css'],
  
})
export class NickComponent implements OnInit {
  static onClickMe(onClickMe: any, arg1: string) {
    alert("Method not implemented.");
  }
  constructor() { }
  
  addTwoParameters(arg0: number, arg1: number): any {
    return arg0 + arg1
  }

  giveMeShortcut(arg0: "Ripple"): any {
    return "XRP"
  }

  ngOnInit() {
  }

}
