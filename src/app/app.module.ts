import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AddCollegueComponent } from './add-collegue/add-collegue.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EmailValidatorDirective } from './validators/email-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    AddCollegueComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, NgbModule,
  ],
  //providers: [],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
