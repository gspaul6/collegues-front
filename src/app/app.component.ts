import { Component, OnInit} from '@angular/core';
import { collegueMock } from './mock/collegues.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})
export class AppComponent implements OnInit {
  title = 'collegues-front';

   colCollegue=collegueMock;
  
  ngOnInit(): void {
   // console.log(this.collegue)
  }
 
}
