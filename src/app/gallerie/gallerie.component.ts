import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ColPhotoMatricule } from '../models/ColPhotoMatricule';
import { collegueMock } from '../mock/collegues.mock';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-gallerie',
  templateUrl: './gallerie.component.html',
  styleUrls: ['./gallerie.component.css']
})
export class GallerieComponent implements OnInit {

  collegue:ColPhotoMatricule[];
  message: string;
 

  constructor(private service: DataService) { 
  }

  ngOnInit() {
    this.service.researchAllCollegue().subscribe(
photo=>{
  this.collegue.push(photo);
  
  
},
err=>{
  this.message=`${err.error}`;
}

    );
  }

}
