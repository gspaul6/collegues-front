import { Component, OnInit } from '@angular/core';
import { CollegueAuth } from '../models/CollegueAuth';
import { DataService } from '../services/data.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


 messageOk:string;
 messageKo:string;
  collegueAuth:CollegueAuth=new CollegueAuth(" "," ");

  constructor(private service: AuthService) { }

  ngOnInit() {
  }
getAuth(){
 
  this.service.authorizationDeCollegue(this.collegueAuth).subscribe(ok => {
    this.messageKo = undefined;
    this.messageOk = "Login successfull";
    setTimeout(() => this.messageOk = undefined,3000);
  }, err => {
    this.messageOk = undefined;
    this.messageKo = `${err.error}`;
    setTimeout(() => this.messageKo = undefined, 3000);
  })
}
}
