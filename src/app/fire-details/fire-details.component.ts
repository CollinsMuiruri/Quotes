import { Component, OnInit } from '@angular/core';
import { Publics } from '../publics';


@Component({
  selector: 'app-fire-details',
  templateUrl: './fire-details.component.html',
  styleUrls: ['./fire-details.component.css']
})
export class FireDetailsComponent implements OnInit {

@Input() Publics:Publics;
  constructor() { }

  ngOnInit() {
  }

}
