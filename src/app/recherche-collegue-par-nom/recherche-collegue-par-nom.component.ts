import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})
export class RechercheCollegueParNomComponent implements OnInit {
  collegueArrayResearch:Collegue[];
  research:string[];
  researchAvecMatricule:Collegue[];
listExists:boolean=true;
  constructor(private  nameResearch:DataService) { }
  researchParNom(saisie:string):any{
    
    return this.research = this.nameResearch.researchParNomService(saisie);
  }
  recupererCollegueCourant(tabMatricules:string[]):Array<Collegue>{
 return this.researchAvecMatricule= this.collegueArrayResearch.filter(collegue=> tabMatricules.filter(items=>items == collegue.matricule));

}
  ngOnInit() {
    this.collegueArrayResearch = this.nameResearch.collegueTakingMock;
  }

}
