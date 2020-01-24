import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  public onButtonClicked(){
    alert("Diese Antwort ist richtig.")
  }
  
  public onButtonClicked1(){
    alert("Diese Antwort ist FALSCH.")
  }
}