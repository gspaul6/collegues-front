import { Component, OnInit} from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { Collegue } from "./models/Collegue";
import { DataService } from './services/data.service';
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]

})
export class AppComponent implements OnInit {
  title = 'collegues-front';

  collegueArray:Collegue[];
   
  traiter(leTexte:string){
    alert(leTexte);
  }

  constructor(private _srvData:DataService) {}

  ngOnInit(): void {
   // console.log(this.collegue)
   this.collegueArray = this._srvData.collegueTakingMock;
  }
 
}
