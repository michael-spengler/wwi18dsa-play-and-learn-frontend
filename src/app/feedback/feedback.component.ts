import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public onClickFeedbackEntry() {
    var vorname=<HTMLInputElement>document.getElementById('vorname');
    vorname.value='';
    var lastname=<HTMLInputElement>document.getElementById('lastname');
    lastname.value='';
    var mail=<HTMLInputElement>document.getElementById('mail');
    mail.value='';
    var text=<HTMLInputElement>document.getElementById('text');
    text.value='';
    var answ=document.createElement('h5')
    answ.innerText='Feedback wurde abgesendet';
    var div2=<HTMLBodyElement>document.getElementById('2');
    div2.appendChild(answ);
    
  }

  
}

