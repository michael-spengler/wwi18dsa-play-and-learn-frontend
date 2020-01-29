import { Component, OnInit } from '@angular/core';
import { IStylingData } from 'german-legal-disclaimer';
import { IIndividualImpressumData } from 'german-impressum';
import { Comment } from '@angular/compiler';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public individualImpressumData: IIndividualImpressumData = {
    name: 'Elias Schock',
    street: 'Schwätzingerstraße 99',
    extension: '',
    zipCode: '88212',
    city: 'Ravensburg',
    phoneNumber: '015251816289',
    eMail: 'Elias.Schock@gmx.de',
    textAlign: 'center',
    bgColor: 'inherit',
  };

  public stylingData: IStylingData = {
    textAlign: '...',
    bgColor: '...'
  };
  constructor() { }

  ngOnInit() {
    
  }

}
