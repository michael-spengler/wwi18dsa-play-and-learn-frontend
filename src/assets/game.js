function CryptoInfo(Info){

    var burl = "https://api.binance.com";
    var query = "/api/v3/avgPrice";
    query += '?symbol=' + Info;

    var url = burl + query;

    var ourRequest = new XMLHttpRequest();

    ourRequest.open('GET', url, true);
    ourRequest.onload = function(){
        console.log(ourRequest.responseText, 'this is the initial console log');
        document.getElementById('myDiv').innerHTML += ourRequest.responseText;
    }

    ourRequest.send();
}