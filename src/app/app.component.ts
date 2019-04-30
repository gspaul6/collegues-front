import { Component, OnInit} from '@angular/core';
import { collegueMock } from './mock/collegues.mock';
import { Collegue } from "./models/Collegue";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  title = 'collegues-front';

  collegueArray:Collegue[]=collegueMock;
   
  traiter(leTexte:string){
    alert(leTexte);
  }
  ngOnInit(): void {
   // console.log(this.collegue)
  }
 
}
