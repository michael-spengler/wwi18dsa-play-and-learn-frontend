import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unterseite',
  templateUrl: './unterseite.component.html',
  styleUrls: ['./unterseite.component.css']
})
export class UnterseiteComponent implements OnInit {

  constructor() { }
  addition(a,b){
    alert('Das Ergebnis ist: ');
    alert(Number(a.value)+Number(b.value));
  }
  subtraction(a,b){
    alert('Das Ergebnis ist: ');
    alert(Number(a.value)-Number(b.value));
  }
  multiplication(a,b){
    alert('Das Ergebnis ist: ');
    alert(Number(a.value)*Number(b.value));
  }
  division(a,b){
    alert('Das Ergebnis ist: ');
    alert(Number(a.value)/Number(b.value));
  }
  ngOnInit() {
  }

}