import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue, CollegueModifier } from '../models/Collegue';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  modifier:boolean=true;
  newCollegueClick:boolean=true;
  nameModifier:string="Modifier";
  col:Collegue;
  collegueModifier:CollegueModifier=new CollegueModifier(" "," ");

   @Output() change:EventEmitter<string> = new EventEmitter<string>();
   constructor(private service:DataService){

}
  newCollegue(){
 //   this.change.emit('du nouveau utiliser')
    
  }
  Modifier(){
    if(this.modifier){
      this.nameModifier="Valider";
      this.collegueModifier.email=this.col.email;
      this.collegueModifier.photo=this.col.photoUrl;
      this.service.modificationCollegueCourant(this.col.matricule, this.collegueModifier).subscribe(collegue => {}, err => {});

    }else{
      this.nameModifier="Modifier";
    }
  }

  ngOnInit() {
    this.service.prendreAbonnement().subscribe(collegue=>this.col=collegue);
}
}