import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrenotazioniService } from './services/prenotazioni.service';
import { FormsModule } from '@angular/forms';
import { PrenotazioniComponent } from './prenotazioni/prenotazioni.component';
@NgModule({
  declarations: [
    AppComponent,
    PrenotazioniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PrenotazioniService],
  bootstrap: [AppComponent]
})
export class AppModule { }
