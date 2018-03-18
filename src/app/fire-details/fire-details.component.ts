import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Publics } from '../publics';


@Component({
  selector: 'app-fire-details',
  templateUrl: './fire-details.component.html',
  styleUrls: ['./fire-details.component.css']
})
export class FireDetailsComponent implements OnInit {

  @Input() Publics: Publics;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteComplete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
