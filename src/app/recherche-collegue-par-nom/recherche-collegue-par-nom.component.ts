import { Component, OnInit, Input } from "@angular/core";
import { Collegue } from "../models/Collegue";
import { collegueMock } from "../mock/collegues.mock";
import { DataService } from "../services/data.service";
import { Observable, Subject, interval, AsyncSubject } from "rxjs";
@Component({
  selector: "app-recherche-collegue-par-nom",
  templateUrl: "./recherche-collegue-par-nom.component.html",
  styleUrls: ["./recherche-collegue-par-nom.component.css"]
})
export class RechercheCollegueParNomComponent implements OnInit {

  research: string[];

  constructor(private _service: DataService) {


  }

  researchParNom(saisie: string): any {

    return this._service.researchParNomService(saisie).subscribe(tabPosts => {
       this.research = tabPosts;
      },
      erreur => {});
  }
  recupererCollegueCourant(matricules: string): void {

    this._service.recupererCollegueCourant(matricules).subscribe(collegue => {}, err => {});

  }
  ngOnInit(): void {

  }

}
