import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unterseite',
  templateUrl: './unterseite.component.html',
  styleUrls: ['./unterseite.component.css']
})
export class UnterseiteComponent implements OnInit {
  c_s:number;
  c_a:number;
  c_m:number;
  c_d:number;
  constructor() { }
  addition(a,b){
    var c_a =Number(a.value)+Number(b.value);
    // alert('Das Ergebnis ist: ');
    // alert(c_a);
    this.c_a=c_a;
  }
  subtraction(a,b){
    var c_s=Number(a.value)-Number(b.value);
    // alert('Das Ergebnis ist: ');
    // alert(c_s);
    this.c_s=c_s;
  }
  multiplication(a,b){
    var c_m=Number(a.value)*Number(b.value);
    // alert('Das Ergebnis ist: ');
    // alert(c_m);
    this.c_m=c_m;
  }
  division(a,b){
    var c_d=Number(a.value)/Number(b.value);
    // alert('Das Ergebnis ist: ');
    // alert(c_d);
    this.c_d=c_d;
  }
  public add(a,b){
    return a+b;
  }
  ngOnInit() {
  }

}
