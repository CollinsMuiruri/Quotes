import { Component } from '@angular/core';
import { Publics } from './publics'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  quotes = [
    new Publics(1, 'fgf'),
    new Publics(2, 'djd'),
    new Publics(3, 'kks'),
    new Publics(3, 'kks'),
    new Publics(3, 'kks'),
  ]
}
