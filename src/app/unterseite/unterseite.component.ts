import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unterseite',
  templateUrl: './unterseite.component.html',
  styleUrls: ['./unterseite.component.css']
})
export class UnterseiteComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
function addition(a:number, b:number):number {
  return a+b;
}
function subtraction(a:number, b:number):number {
  return a-b;
}
function multiplication(a:number,b:number):number {
  return a*b;
}
function division(a:number, b:number):number {
  return a/b
}