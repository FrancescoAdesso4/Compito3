import { Time } from "@angular/common";

export class Prenotazione{
    public id:number;
    public data: Date;
    public ora: string;
    public nomeProprietario: string;
    public cognomeProprietario: string;
    public telefonoProprietario: number;
    public tipologiaAnimale:string;
    public tipoPrestazione:string;
    public annotazioni: string;
    constructor(id:number, data: Date, ora: string, nomeProprietario: string, cognomeProprietario:string, telefonoProprietario:number,tipologiaAnimale:string, tipoPrestazione:string, annotazioni:string ) {
      this.id=id;
      this.data = data;
      this.ora = ora;
      this.nomeProprietario = nomeProprietario;
      this.cognomeProprietario = cognomeProprietario;
      this.telefonoProprietario = telefonoProprietario;
      this.tipologiaAnimale = tipologiaAnimale;
      this.tipoPrestazione = tipoPrestazione;
      this.annotazioni = annotazioni;
    }
}