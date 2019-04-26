import { Component, OnInit, Input } from '@angular/core';
import { collegueMock } from '../mock/collegues.mock';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {
  
  
  
    @Input()col:Collegue;

  newCollegue(){

  }
  Modifier(){}

  ngOnInit() {
  }

}
