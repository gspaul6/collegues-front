import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  
  
  
    @Input()col:Collegue;
  
    @Output() change:EventEmitter<string> = new EventEmitter<string>();

  newCollegue(){
    this.change.emit('du nouveau utiliser')
  }
  Modifier(){
    this.change.emit('Modifier')
  }

  ngOnInit() {
}
}