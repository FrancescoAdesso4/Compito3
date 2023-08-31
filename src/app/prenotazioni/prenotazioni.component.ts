import { Component, OnInit } from '@angular/core';
import { Prenotazione } from '../models/prenotazione.model';
import { PrenotazioniService } from '../services/prenotazioni.service';

@Component({
  selector: 'app-prenotazioni',
  templateUrl: './prenotazioni.component.html',
  styleUrls: ['./prenotazioni.component.css'],
  providers: [PrenotazioniService]
})
export class PrenotazioniComponent {
  proprietario:string = "";
  animali:string[];
  prestazioni:string[];
  listaPrenotazioni:Prenotazione[] = [];
  prenotazioneDettaglio!:Prenotazione;
  constructor(private prenotazioniService: PrenotazioniService){
    this.animali=["CANE","GATTO", "UCCELLO", "CONIGLIO", "ALTRO"]
    this.prestazioni=["PROFILASSI VACCINALE/ANTIPARASSITARIA", "APPLICAZIONE MICROCHIP", "CHECKUP COMPLETO", "ESAMI DI LABORATORIO"]
   
  }
  ngOnInit(): void {
    this.listaPrenotazioni = this.prenotazioniService.getPrenotazioni();
  }
  addPrenotazione(data:string, ora:string, nome:string, cognome:string, telefono:string, tAnimale:string, tPrestazione:string, annotazioni:string ){
    if(data !== "" && ora !== "" && nome !== "" && cognome !== "" && telefono !== "" && tAnimale !== "" && tPrestazione !== ""){
      const telefonoNumerico = parseInt(telefono, 10);
      const formatoData = new Date(data);
      const id = this.listaPrenotazioni.length + 1;
      var note:string;
      if (annotazioni!=""){
        note = annotazioni;
      }else{
        note = "NON PRESENTI";
      }
      const newPrenotazione = new Prenotazione(id, formatoData, ora, nome, cognome, telefonoNumerico,tAnimale, tPrestazione, note )
      this.prenotazioniService.addPrenotazione(newPrenotazione);

    } else if(data == "" && ora == "" && nome == "" && cognome == "" && telefono == "" && tAnimale == "" && tPrestazione == ""){
      alert("*ATTENZIONE, TUTTI I CAMPI TRANNE 'ANNOTAZIONI' VANNO INSERITI OBBLIGATORIAMENTE PER AGGIUNGERE UNA PRENOTAZIONE");
    }else if(data == "" && ora !== "" && nome !== "" && cognome !== "" && telefono !== "" && tAnimale !== "" && tPrestazione !== ""){
      alert("*ATTENZIONE, INSERIRE IL CAMPO 'DATA' PER INSERIRE UNA PRENOTAZIONE");
    }else if(data !== "" && ora == "" && nome !== "" && cognome !== "" && telefono !== "" && tAnimale !== "" && tPrestazione !== ""){
      alert("*ATTENZIONE, INSERIRE IL CAMPO 'ORA' PER INSERIRE UNA PRENOTAZIONE");
    }else if(data !== "" && ora !== "" && nome == "" && cognome !== "" && telefono !== "" && tAnimale !== "" && tPrestazione !== ""){
      alert("*ATTENZIONE, INSERIRE IL CAMPO 'NOME' PER INSERIRE UNA PRENOTAZIONE");
    }else if(data !== "" && ora !== "" && nome !== "" && cognome == "" && telefono !== "" && tAnimale !== "" && tPrestazione !== ""){
      alert("*ATTENZIONE, INSERIRE IL CAMPO 'COGNOME' PER INSERIRE UNA PRENOTAZIONE");
    }else if(data !== "" && ora !== "" && nome !== "" && cognome !== "" && telefono == "" && tAnimale !== "" && tPrestazione !== ""){
      alert("*ATTENZIONE, INSERIRE IL CAMPO 'TELEFONO' PER INSERIRE UNA PRENOTAZIONE");
    }else if(data !== "" && ora !== "" && nome !== "" && cognome !== "" && telefono !== "" && tAnimale == "" && tPrestazione !== ""){
      alert("*ATTENZIONE, INSERIRE IL CAMPO 'TIPOLOGIA ANIMALE' PER INSERIRE UNA PRENOTAZIONE");
    }else if(data !== "" && ora !== "" && nome !== "" && cognome !== "" && telefono !== "" && tAnimale !== "" && tPrestazione == ""){
      alert("*ATTENZIONE, INSERIRE IL CAMPO 'TIPOLOGIA PRESTAZIONE' PER INSERIRE UNA PRENOTAZIONE");
    }else if( telefono.toString().length < 10 || telefono.toString().length > 10 ){
      alert("*NUMERO DI TELEFONO NON VALIDO");
    }


    else{
      alert("*ATTENZIONE, INSERIRE I CAMPI MANCANTI PER AGGIUNGERE UNA PRENOTAZIONE");
    }
    
    
  }
  cancella(prenotazione:Prenotazione):void{
    this.prenotazioniService.removePrenotazione(prenotazione);
  }
  dettagli(id:number):void{
    const dettagli:Prenotazione = this.prenotazioniService.getPrenotazioneFromId(id);
    this.prenotazioneDettaglio = dettagli;
  }
  
}
