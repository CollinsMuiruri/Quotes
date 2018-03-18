import { Component } from '@angular/core';
import { Publics } from './publics'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  quotes = [
    new Publics(1, 'first quote','this is new'),
    new Publics(2, 'second quote','this is new'),
    new Publics(3, 'third quote','this is new'),
    new Publics(3, 'fouth quote','this is new'),
    new Publics(3, 'fifth quote','this is new'),
  ]
}
