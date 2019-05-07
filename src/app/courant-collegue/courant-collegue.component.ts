import { Component, OnInit } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { ActivatedRoute, ParamMap,  } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-courant-collegue',
  templateUrl: './courant-collegue.component.html',
  styleUrls: ['./courant-collegue.component.css']
})
export class CourantCollegueComponent implements OnInit {
CollegueClicked:Collegue;
matricule:string;
service:DataService;
message:string;
  constructor(private route: ActivatedRoute, service:DataService) { 
this.service=service;
  }

  ngOnInit() {
 this.matricule=this. route.snapshot.paramMap.get('matricule');
 this.service.recupererCollegueCourant(this.matricule).subscribe(collegue => {
   this.CollegueClicked=collegue;
 }, err=> {
  this.message=`${err.error}`;
});
  }

}
