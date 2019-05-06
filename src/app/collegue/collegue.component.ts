import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { collegueMock } from "../mock/collegues.mock";
import { Collegue, CollegueModifier } from "../models/Collegue";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.css"]
})
export class CollegueComponent implements OnInit {
  modifier: boolean = true;
  newCollegueClick: boolean = true;
  col: Collegue;
  collegueModifier: CollegueModifier = new CollegueModifier(" ", " ");
  messageModifOk: string;
  messageModifKo: string;

  constructor(private service: DataService) {

  }

  Modifier(): void {
    

      this.collegueModifier.email = this.col.email;
      this.collegueModifier.photo = this.col.photoUrl;
      this.service.modificationCollegueCourant(this.col.matricule, this.collegueModifier).subscribe(collegue => {
        this.messageModifKo = undefined;
        this.messageModifOk = "Modification successfull";
        setTimeout(() => this.messageModifOk = undefined,10000);
      }, err => {
        this.messageModifOk = undefined;
        this.messageModifKo = `${err.error}`;
        setTimeout(() => this.messageModifKo = undefined, 2000);
      });

    
  }

  ngOnInit(): void {
    this.service.prendreAbonnement().subscribe(collegue => this.col = collegue);
  }
}