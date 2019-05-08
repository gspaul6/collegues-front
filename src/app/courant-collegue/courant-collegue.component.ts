import { Component, OnInit } from "@angular/core";
import { Collegue } from "../models/Collegue";
import { ActivatedRoute, ParamMap,  } from "@angular/router";
import { DataService } from "../services/data.service";
import { NewCommentaire } from "../models/NewCommentaire";
import { Commentaire } from "../models/Commentaire";

@Component({
  selector: "app-courant-collegue",
  templateUrl: "./courant-collegue.component.html",
  styleUrls: ["./courant-collegue.component.css"]
})
export class CourantCollegueComponent implements OnInit {
CollegueClicked:Collegue;
matricule:string;

message: string;
messageOk: string;
newCommentaire: NewCommentaire = new NewCommentaire();
commentaires:Commentaire[];
constructor(private service: DataService, private route: ActivatedRoute) {
  
}
updateAfterDelete(): void {
  this.updateCommentaire();
}

addCommentaire(): void {
  this.service.ajouterCommentaire(this.newCommentaire, this.matricule).subscribe(
    (commentaire) => {
      this.message = undefined;
      this.messageOk = "Addition of Commentaire successful";
      setTimeout(() => this.messageOk = undefined, 5000);
      setTimeout(()=>this.updateCommentaire(),5000);
    },
    (err) => {
      this.messageOk = undefined;
      this.message = `${err.error}`;
      setTimeout(() => this.message = undefined, 5000);
    }

  );
}


updateCommentaire():void {
  this.service.researchAllCommentaire(this.matricule).subscribe(commentaire => {
    this.commentaires=commentaire;
    }, err => {
     this.message = `${err.error}`;
      });
}

  ngOnInit() {
 this.matricule=this. route.snapshot.paramMap.get("matricule");
 this.service.recupererCollegueCourant(this.matricule).subscribe(collegue => {
   this.CollegueClicked=collegue;
 }, err=> {
  this.message=`${err.error}`;
});
this.updateCommentaire();
  }
  
}
