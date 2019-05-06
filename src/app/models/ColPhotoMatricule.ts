import { Component, OnInit } from '@angular/core';

export class ColPhotoMatricule implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
    public matricule: string;
    public photoUrl: string;
    
    constructor( matricule: string, photoUrl: string, ) {
          this.matricule= matricule;
           this.photoUrl=photoUrl;
    }
   
}
