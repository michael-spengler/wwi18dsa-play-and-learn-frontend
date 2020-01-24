import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nick2',
  templateUrl: './nick2.component.html',
  styleUrls: ['./nick2.component.css']
})
export class Nick2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signUpButton.addEventListener('click', () => {
	    container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
      
});
  }

}
