import { Component, OnInit, Input, Output } from "@angular/core";
import { Commentaire } from "../models/Commentaire";
import { DataService } from "../services/data.service";
import { EventEmitter } from "events";

@Component({
  selector: "app-commentaire",
  templateUrl: "./commentaire.component.html",
  styleUrls: ["./commentaire.component.css"]
})
export class CommentaireComponent implements OnInit {

  @Input() commentaire: Commentaire;
  @Input() matricule: string;
  @Output() event=new EventEmitter();
  messageOk: string;
  messageNotOk: string;
  constructor(private service: DataService) { }

  delCommentaire(): void {
    this.service.deleteCommentaire(this.commentaire.id, this.matricule).subscribe(
      (success) => {
        this.messageNotOk = undefined;
        this.messageOk = "deletion of Commentaire successful";
        setTimeout(() => this.messageOk = undefined, 5000);
      },
      (err) => {
        this.messageOk = undefined;
        this.messageNotOk = `${err.error}`;
        setTimeout(() => this.messageNotOk = undefined, 5000);
      }
    );
  }

  ngOnInit(): void {

  }
}
