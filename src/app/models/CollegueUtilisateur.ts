import { Component, OnInit } from '@angular/core';

export class ColleguesUtilisateur {
    public matricule: string;
    public nom: string;
    public prenoms: string;
    public roles: string[];
    constructor(matricule: string, nom: string, prenoms: string, roles: string[]) {
        this.matricule = matricule;
        this.nom = nom;
        this.prenoms = prenoms;
        this.roles = roles;
    }
}