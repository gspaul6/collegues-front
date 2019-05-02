import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';
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
  
    @Output() change:EventEmitter<string> = new EventEmitter<string>();
constructor(private service:DataService){

}
  newCollegue(){
    this.change.emit('du nouveau utiliser')
    //this.newCollegueClick=true;
  }
  Modifier(){
    this.change.emit('Modifier')
    //this.modifier=true;
  if(this.modifier){
    this.nameModifier="Valider";
  }else{
    this.nameModifier="Modifier";
  }
  }

  ngOnInit() {
    this.service.prendreAbonnement().subscribe(collegue=>this.col=collegue);
}
}