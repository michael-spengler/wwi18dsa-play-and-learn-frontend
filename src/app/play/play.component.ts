import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    class StarRating {
        container;
        labelSelector;
        currentlySelectedRating;

        constructor(containerSelector, labelSelector) {
          this.container = document.querySelector(containerSelector);
          this.labelSelector = labelSelector;
          this.currentlySelectedRating = null;

          this.bindEventListeners();
        }

        bindEventListeners() {
          this.container.addEventListener('click', (e) => {
            if (e.target.tagName !== 'LABEL') {
              return;
            }
            this.currentlySelectedRating = parseInt(e.target.getAttribute('for'));
            this.highlightStars(e.target);
          });

          this.container.addEventListener('mouseover', (e) => {
            if (e.target.tagName !== 'LABEL') {
              return;
            }
            this.highlightStars(e.target);
          });

          this.container.addEventListener('mouseleave', (e) => {
            this.highlightStars(document.querySelector(`${this.labelSelector}[for="${this.currentlySelectedRating}"]`));
          });
        }

        highlightStars(starElement) {
          const rating = starElement ? parseInt(starElement.getAttribute('for')) : 0;
          for (let i = 1; i <= 5; i++) {
            const currentStar: any  = document.querySelector(`${this.labelSelector}[for="${i}"]`);
            if (i <= rating) {
              currentStar.style.color = '#d33454';
            } else {
              currentStar.style.color = 'white';
            }
          }
        }
      }

      const ratingsWidget = new StarRating('.review__rating', '.review__rating label');

                  };
                  public ratingjson(){
                    var radios: any = document.getElementsByName("rating");

                    for (var i = 0, length = radios.length; i < length; i++) {
                      if (radios[i].checked) {
                        alert(radios[i].value);
                        break;
                    }
                    }
                }
        }