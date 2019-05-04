import { Component, OnInit } from "@angular/core";
import { CollegueAdd } from "../models/CollegueAdd";
import { DataService } from "../services/data.service";

@Component({
  selector: "app-add-collegue",
  templateUrl: "./add-collegue.component.html",
  styleUrls: ["./add-collegue.component.css"]
})
export class AddCollegueComponent implements OnInit {

  ajoutCollegue:CollegueAdd = new CollegueAdd();
  messageModifOk: string;
  messageModifKo: string;
  constructor(private service:DataService) {

  }

  ajouterCollegue():void {
    this.service.ajouterCollegue(this.ajoutCollegue).subscribe(
      (collegue)=> {
        this.messageModifKo = undefined;
        this.messageModifOk = "Addition of Collegue successful";
        setTimeout(() => this.messageModifOk = undefined,6000);
      },
      (err)=> {
        this.messageModifOk = undefined;
        this.messageModifKo = `${err.error}`;
        setTimeout(() => this.messageModifKo = undefined,6000);
      }
    );
}
  ngOnInit():void {
  }

}
