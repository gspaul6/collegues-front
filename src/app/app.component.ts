import { Component, OnInit, OnDestroy} from "@angular/core";
import { collegueMock } from "./mock/collegues.mock";
import { Collegue } from "./models/Collegue";
import { DataService } from "./services/data.service";
import { Subscription } from "rxjs";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]

})
export class AppComponent implements OnInit, OnDestroy {

  title = "collegues-front";


  // tslint:disable-next-line:no-empty
  constructor() {

  }

  // tslint:disable-next-line:no-empty
  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    throw new Error("Method not implemented.");
  }

}
