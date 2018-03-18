import { Component, OnInit } from '@angular/core';
import { Publics } from '../publics';


@Component({
  selector: 'app-fire',
  templateUrl: './fire.component.html',
  styleUrls: ['./fire.component.css']
})
export class FireComponent implements OnInit {

  quotes = [
    new Publics(1, 'first quote', 'this is new'),
    new Publics(2, 'second quote', 'this is new'),
    new Publics(3, 'third quote', 'this is new'),
    new Publics(3, 'fouth quote', 'this is new'),
    new Publics(3, 'fifth quote', 'this is new'),
  ]

  completeQuote(isComplete, index) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  toggling(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
