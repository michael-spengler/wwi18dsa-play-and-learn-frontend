import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aktuell',
  templateUrl: './aktuell.component.html',
  styleUrls: ['./aktuell.component.css']
})
export class AktuellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

}
/*public wetter(){

  const Weather = require('weather');
 
  const appID = ''; // here.com appID
  const appCode = ''; // here.com appCode
 
  const weather = new Weather({
      appID,
      appCode
  });
 
// now(<location>) returns a Promise
weather.now('Brisbane, Australia').then((results) => {
    console.log(results);
});
}
*/

/*import { DistanceCalculator } from 'distance-calculator-lat-lon'

function test(){

  const dc: DistanceCalculator = new DistanceCalculator();

  const distance: number = dc.getDistance(0, 0, 49, 8, 'K'); 
  console.log(distance);
  var test = 'hallo maria'
  document.getElementById("kalk").innerHTML=distance;

}
*/
