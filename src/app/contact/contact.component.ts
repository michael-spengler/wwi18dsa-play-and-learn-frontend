import { Component, OnInit } from '@angular/core';
import { IStylingData } from 'german-legal-disclaimer';
import { IIndividualImpressumData } from 'german-impressum';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public individualImpressumData: IIndividualImpressumData = {
    name: 'Michael Spengler',
    street: 'Zollhofgarten 8',
    extension: '',
    zipCode: '69115',
    city: 'Heidelberg',
    phoneNumber: '0049 151 67 83 38 69',
    eMail: 'michael@spengler.biz',
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
