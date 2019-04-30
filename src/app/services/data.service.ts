import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  collegueArrayResearch: any;
collegueTakingMock:Collegue[]=collegueMock;

  constructor() { }
  researchParNomService(saisie: string):string[] {
console.log(this.collegueTakingMock.filter(collegue => collegue.nom === saisie).map(collegue => collegue.matricule));
    return this.collegueTakingMock.filter(collegue => collegue.nom === saisie).map(collegue => collegue.matricule);

  }
  recupererCollegueCourant(tabMatricules: string[]): Array<Collegue> {
    return this.collegueTakingMock.filter(collegue => tabMatricules.filter(items => items == collegue.matricule));

  }
}