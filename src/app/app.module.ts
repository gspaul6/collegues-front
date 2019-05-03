import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CollegueComponent } from './collegue/collegue.component';
import { RechercheCollegueParNomComponent } from './recherche-collegue-par-nom/recherche-collegue-par-nom.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AddComponent } from './add/add.component';
import { AddCollegueComponent } from './add-collegue/add-collegue.component';

@NgModule({
  declarations: [
    AppComponent,
    CollegueComponent,
    RechercheCollegueParNomComponent,
    AddComponent,
    AddCollegueComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule,
  ],
  //providers: [],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
