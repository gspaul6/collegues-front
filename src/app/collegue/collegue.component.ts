import { Component, OnInit, Input } from "@angular/core";
import { Collegue } from "../models/Collegue";

@Component({
  selector: "app-collegue",
  templateUrl: "./collegue.component.html",
  styleUrls: ["./collegue.component.css"]
})
export class CollegueComponent implements OnInit {
  @Input() collegue = Collegue;
  // tslint:disable-next-line:no-empty
  constructor() {
  }
  // tslint:disable-next-line:no-empty
  ngOnInit(): void {
  }

}
