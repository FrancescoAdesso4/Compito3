import { Injectable } from '@angular/core';
import { Prenotazione } from '../models/prenotazione.model';
import { filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  
  private elencoPrenotazioni : Prenotazione[] = [];
  selectedId: number = -1;
  constructor() { }

  getPrenotazioni():Prenotazione[] {
    this.ordinaPrenotazioni();
   return this.elencoPrenotazioni;
  }
  addPrenotazione(prenotazione:Prenotazione): void{
    this.elencoPrenotazioni.push(prenotazione);
    this.ordinaPrenotazioni();
  }
  removePrenotazione(prenotazione:Prenotazione): void{
    for(var i=0; i<this.elencoPrenotazioni.length; i++){
      if(this.elencoPrenotazioni[i] == prenotazione){
        this.elencoPrenotazioni.splice(i, 1)
      }
    }
  }
  getPrenotazioneFromId(id:number): Prenotazione{
    this.ordinaPrenotazioni();
    return this.elencoPrenotazioni.filter(p => p.id === id)[0];
  }
  ordinaPrenotazioni():void{
    this.elencoPrenotazioni.sort((a, b) => a.data.getTime() - b.data.getTime());
  } 

 
}
