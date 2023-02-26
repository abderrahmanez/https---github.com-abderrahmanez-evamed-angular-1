import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListeMaladesComponent } from './components/liste-malades/liste-malades.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListeMaladesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
