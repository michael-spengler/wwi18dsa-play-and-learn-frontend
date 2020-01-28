import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q-and-a',
  templateUrl: './q-and-a.component.html',
  styleUrls: ['./q-and-a.component.css']
})
export class QAndAComponent implements OnInit {

  // public backendBaseURL = 'http://localhost:3000';
  public backendBaseURL = 'http://wwi18dsa.de';
  public persistencyURLForGetRequest = `${this.backendBaseURL}/getAsset`;
  public persistencyURLForAddRequest = `${this.backendBaseURL}/addAsset`;
  public persistencyURLForUpdateRequest = `${this.backendBaseURL}/updateAsset/asset`;

  constructor() { }

  ngOnInit() {
  }

}

