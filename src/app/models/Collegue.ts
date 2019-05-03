import { Component, OnInit } from '@angular/core';

export class Collegue implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
    public matricule: string;
    public  nom: string;
    public prenoms: string;
    public email: string;
    public dateDeNaissance: Date;
    public photoUrl: string;
    constructor( matricule: string, nom: string, prenoms: string, dateDeNaissance: Date,
         email: string,        
        photoUrl: string, ) {
          this.matricule= matricule;
            this.nom=nom;
            this.prenoms= prenoms;
            this.dateDeNaissance= dateDeNaissance;
            this.email= email;
            this.photoUrl=photoUrl;
    }
   
}

export class CollegueModifier {
  email:string;
  photo:string;
  constructor(email:string,photoUrl:string){
    this.email=email;
    this.photo=photoUrl;
   
  }    

}
