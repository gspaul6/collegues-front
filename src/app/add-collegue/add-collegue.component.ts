import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-add-collegue',
  templateUrl: './add-collegue.component.html',
  styleUrls: ['./add-collegue.component.css']
})
export class AddCollegueComponent implements OnInit {

  ajoutCollegue:Collegue;
  constructor() { }
  ajouterCollegue(){

}
  ngOnInit() {
  }

}
