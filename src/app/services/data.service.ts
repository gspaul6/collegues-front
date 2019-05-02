import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';
import { environment } from '../../environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlSpring:string=environment.urlGet;

  sujet:Subject<Collegue>=new Subject<Collegue>();

  constructor(private httpClient: HttpClient) { }
  
  prendreAbonnement():Observable<Collegue> {
   return this.sujet.asObservable();
}

  researchParNomService(saisie: string):Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.urlSpring}?nom=${saisie}`)
      }
  
  
  recupererCollegueCourant(tabMatricules: string): Observable<Collegue>  {
   
   return this.httpClient.get<Collegue>(`${this.urlSpring}/${tabMatricules}`)
   .pipe(
     tap(col=>{
       this.sujet.next(col);
     })
   )
   
   
   ;
  }
  
}