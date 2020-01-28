import { Component, OnInit } from '@angular/core';

function CryptoInfo(Info, id){

  var burl = "https://api.binance.com";
  var query = "/api/v3/avgPrice";
  query += '?symbol=' + Info;

  var url = burl + query;

  var ourRequest = new XMLHttpRequest();

  ourRequest.open('GET', url, true);
  ourRequest.onload = function(){
      console.log(ourRequest.responseText, 'this is the initial console log');
      var x = JSON.parse(ourRequest.responseText)
      x = x["price"]
      document.getElementById(id).innerHTML += x;
  }

  ourRequest.send();
}


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
  
})
export class GameComponent implements OnInit {

  constructor() { }

    
  ngOnInit() {
    CryptoInfo('BATUSDT', 'crypto1');
    CryptoInfo('ETHUSDT','crypto2')
    CryptoInfo('BTCUSDT', 'crypto3')
    CryptoInfo('BNBUSDT', 'crypto4')
    CryptoInfo('BCCUSDT', 'crypto5')
  }
  
  
  
 
}
