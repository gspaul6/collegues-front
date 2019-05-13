import { Component, OnInit } from '@angular/core';


export class CollegueAuth {
    public nom:string;
    public motPass:string;
    constructor(nom:string,motPass:string){
        this.nom=nom;
        this.motPass=motPass;
    }

}
