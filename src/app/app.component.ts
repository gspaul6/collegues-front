import { Component} from "@angular/core";
import { DataService } from './services/data.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]

})
export class AppComponent {

  title = "collegues-front";
  constructor(private service: AuthService) {

  }

deconnexion(){
this.service.deconnexionDeCollegue().subscribe(col=>{},err=>{});
}
}
