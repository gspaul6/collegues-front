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
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { GallerieComponent } from './gallerie/gallerie.component';
import{MenuComponent} from './menu/menu.component';
import { CourantCollegueComponent } from './courant-collegue/courant-collegue.component'
@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    AddCollegueComponent,
    EmailValidatorDirective,
    MenuComponent,
    GallerieComponent,
    CourantCollegueComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, NgbModule, RouterModule.forRoot(ROUTES),
  ],
  //providers: [],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
