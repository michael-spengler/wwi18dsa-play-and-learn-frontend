import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommends',
  templateUrl: './recommends.component.html',
  styleUrls: ['./recommends.component.css']
})
export class RecommendsComponent implements OnInit {
  hideContent1 = false;
  hideContent2 = true;
  hideContent3 = true;
  constructor() { }

  ngOnInit() {
  }

  Toggle(x){
    if (x===1){
      this.hideContent1 = false
      this.hideContent2 = true
      this.hideContent3 = true
    }
    if (x===2){
      this.hideContent1 = true
      this.hideContent2 = false
      this.hideContent3 = true
    }
    if (x===3){
      this.hideContent1 = true
      this.hideContent2 = true
      this.hideContent3 = false
    }


  }


  }


//Test