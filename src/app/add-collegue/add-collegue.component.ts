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

  constructor(private service:DataService){

  }

  ajouterCollegue():void {
    this.service.ajouterCollegue(this.ajoutCollegue).subscribe(
      (collegue)=>{},
      (err)=>{}
    );
}
  ngOnInit():void {
  }

}
