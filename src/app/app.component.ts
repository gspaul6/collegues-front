import { Component, OnInit } from "@angular/core";
import { collegueMock } from "./mock/collegues.mock";
import { Collegue } from "./models/Collegue";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]

})
export class AppComponent  {
  title = "collegues-front";
col:Collegue=collegueMock[0];


}
