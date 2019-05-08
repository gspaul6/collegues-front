import { Component, OnInit } from "@angular/core";

export class Commentaire {
   public id:Number;
   public comment:string;
   public dateCreated:Date;

    constructor(id:Number, comment:string,dateCreat:Date) {
        this.id=id;
        this.comment=comment;
        this.dateCreated=dateCreat;
    }

}