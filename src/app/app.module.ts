import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FireComponent } from './fire/fire.component';
import { FireDetailsComponent } from './fire-details/fire-details.component';


@NgModule({
  declarations: [
    AppComponent,
    FireComponent,
    FireDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
