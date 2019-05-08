import { Component, OnInit } from "@angular/core";
import { DataService } from "../services/data.service";
import { ColPhotoMatricule } from "../models/ColPhotoMatricule";
import { collegueMock } from "../mock/collegues.mock";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { NewCommentaire } from "../models/NewCommentaire";
import { Commentaire } from "../models/Commentaire";

@Component({
  selector: "app-gallerie",
  templateUrl: "./gallerie.component.html",
  styleUrls: ["./gallerie.component.css"]
})
export class GallerieComponent implements OnInit {

  collegue: ColPhotoMatricule[];
  message: string;
  messageOk: string;
  matricule:string;
  constructor(private service: DataService, private route: ActivatedRoute) {
  
  
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.matricule = this.route.snapshot.paramMap.get("matricule");
    this.service.researchAllCollegue().subscribe(
      photo => {
        this.collegue = photo;
      },
      err => {
        this.message = `${err.error}`;
      }

    );
    
  }

}
