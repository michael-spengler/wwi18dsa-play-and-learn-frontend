import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tier-quiz',
  templateUrl: './tier-quiz.component.html',
  styleUrls: ['./tier-quiz.component.css']
})
export class TierQuizComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public animals=[];
  public counter=0;
  public build(){
    if (this.counter==0){
      this.animals.push(['Pinguin',['Fisch','Krebse'],'https://de.wikipedia.org/wiki/Pinguine#Ern%C3%A4hrung']);
      this.animals.push(['Flamingo',['Krebse','Samen'], 'https://de.wikipedia.org/wiki/Flamingos#Nahrung_und_Ern%C3%A4hrungsweise']);
      this.animals.push(['Nashorn',['Blätter', 'Gräser'],'https://de.wikipedia.org/wiki/Nash%C3%B6rner#Ern%C3%A4hrung']);
      this.animals.push(['Eisbär',['Fisch','Robbe','Vögel'],'https://de.wikipedia.org/wiki/Eisb%C3%A4r#Ern%C3%A4hrung_und_Jagdverhalten']);
      this.animals.push(['Löwe',['Fisch','Vögel','Antilope'],'https://de.wikipedia.org/wiki/L%C3%B6we#Ern%C3%A4hrung']);
      this.animals.push(['Otter',['Fisch'],'https://de.wikipedia.org/wiki/Otter#Lebensweise']);
      this.animals.push(['Robbe',['Fisch', 'Muscheln'],'https://de.wikipedia.org/wiki/Robben#Ern%C3%A4hrung']);
      this.animals.push(['Tiger',['Antilope','Fisch','Vögel'],'https://de.wikipedia.org/wiki/Tiger#Ern%C3%A4hrung']);
      this.animals.push(['Elefant',['Blätter','Gräser','Samen'],'https://de.wikipedia.org/wiki/Elefanten#Ern%C3%A4hrung_und_Verdauung']);
      this.animals.push(['Erdmännchen',['Insekten'],'https://de.wikipedia.org/wiki/Erdm%C3%A4nnchen']);
      this.animals.push(['Giraffe',['Blätter'],'https://de.wikipedia.org/wiki/Giraffen#Lebensweise']);
      this.animals.push(['Nilpferd',['Gräser'],'https://de.wikipedia.org/wiki/Flusspferd#Ern%C3%A4hrung']);
      this.animals.push(['Zebra',['Gräser'],'https://de.wikipedia.org/wiki/Zebras#Verbreitung_und_Lebensweise']);
      this.animals.push(['Affe',['Blätter','Samen', 'Insekten'],'https://de.wikipedia.org/wiki/Affen#Ern%C3%A4hrung']);
      this.animals.push(['Kamel',['Gräser'],'https://de.wikipedia.org/wiki/Kamele#Sozialverhalten_und_Ern%C3%A4hrung']);
      this.counter++;
    }
    
  }
  
  public speichern(){
    var food=(<HTMLInputElement>document.getElementById('Futter')).value;
    if (food==''){
      var p=document.createElement('h1');
      p.innerText='Bitte wähle ein Futter.';
      var div1=<HTMLBodyElement>document.getElementById('1');
      div1.appendChild(p);
    }
    else{
      var false_array=[];
      var right=0;
      for (var idx in this.animals){
        var temp=(<HTMLInputElement>document.getElementById(this.animals[idx][0])).checked;
        if(temp==this.check(idx,food)){
          right++;
        }
        else{
          false_array.push(idx);
        }
      }
      var div1 = <HTMLBodyElement>document.getElementById('1');
      if (false_array.length>0){
        var p=document.createElement('p');
        p.innerText='Du hast '+right+' von '+this.animals.length+' richtig beantwortet.';
        div1.appendChild(p);
        var abs=document.createElement('p');
        abs.innerText='Falsch beantwortet hast du:'
        div1.appendChild(abs);
        for (var j in false_array){
          var a = document.createElement('a');
          var linkText = document.createTextNode(this.animals[false_array[j]][0]);
          a.appendChild(linkText);
          a.href = this.animals[false_array[j]][2];
          a.target="_blank";
          div1.appendChild(a);
          var br =document.createElement('br');
          div1.appendChild(br);
        }
        var satz=document.createElement('p');
        satz.innerText='Mit Klick auf ein Tier erfährst du mehr über die Essgewohnheiten dieses Tieres.'
        div1.appendChild(satz);
      }
      else{
        var text=document.createElement('p');
        text.innerText='Sehr gut, du hast alles richtig! Versuche doch nun ein anderes Futter :)';
        div1.appendChild(text);
      }
    };
  }
  public check(i,food){
    var list=this.animals[i][1];
    var ret=false;
    for (var index in list){
      if(list[index]==food){
        ret=true;
      }
    }
    return ret;
  }
public sum(sum1,sum2){
  return sum1+sum2;
}
  
}



