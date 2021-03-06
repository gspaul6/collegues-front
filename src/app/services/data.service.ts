import { Injectable } from "@angular/core";
import { Collegue, CollegueModifier } from "../models/Collegue";
import { environment } from "../../environments/environment";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { Observable, Subject } from "rxjs";
import { CollegueAdd } from "../models/CollegueAdd";
import { ColPhotoMatricule } from "../models/ColPhotoMatricule";
import { Commentaire } from '../models/Commentaire';
import { NewCommentaire } from '../models/NewCommentaire';

@Injectable({
  providedIn: "root"
})
export class DataService {

  urlSpring: string = environment.urlGet;

  sujet: Subject<Collegue> = new Subject<Collegue>();

  constructor(private httpClient: HttpClient) { }
  prendreAbonnement(): Observable<Collegue> {
    return this.sujet.asObservable();
  }

  researchParNomService(saisie: string): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.urlSpring}?nom=${saisie}`,{withCredentials:true});
  }
  researchParEmailService(saisiEmail: string): Observable<string> {
    return this.httpClient.get<string>(`${this.urlSpring}/email?email=${saisiEmail}`,{withCredentials:true});
  }
  recupererCollegueCourant(tabMatricules: string): Observable<Collegue> {
    return this.httpClient.get<Collegue>(`${this.urlSpring}/${tabMatricules}`,{withCredentials:true})
      .pipe(
        tap(col => {
          this.sujet.next(col);
        })
      );
  }
  modificationCollegueCourant(matricule: string, modifiercollegue: CollegueModifier): any {
    console.log(modifiercollegue);
    return this.httpClient.patch<Collegue>(`${this.urlSpring}/${matricule}`, modifiercollegue,{withCredentials:true});
  }
  ajouterCollegue(collegue: CollegueAdd): Observable<Collegue> {
    return this.httpClient.post<Collegue>(`${this.urlSpring}`, collegue,{withCredentials:true});

  }
  researchAllCollegue(): Observable<ColPhotoMatricule[]> {
    return this.httpClient.get<ColPhotoMatricule[]>(`${this.urlSpring}/all`,{withCredentials:true});
  }
  researchAllCommentaire(matricule:string): Observable<Commentaire[]> {
    return this.httpClient.get<Commentaire[]>(`${this.urlSpring}/{matricule}/commentaire`,{withCredentials:true});
  }
  ajouterCommentaire(commentaire: NewCommentaire,matricule:string): Observable<NewCommentaire> {
    return this.httpClient.post<NewCommentaire>(`${this.urlSpring}/{matricule}/commentaire`, commentaire,{withCredentials:true});
  }
  deleteCommentaire(id:Number,matricule:string):Observable<string> {
    return this.httpClient.delete<string>(`${this.urlSpring}/{matricule}/commentaire/{id}`,{withCredentials:true});
  }

}