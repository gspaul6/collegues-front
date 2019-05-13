import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CollegueAuth } from '../models/CollegueAuth';
import { environment } from 'src/environments/environment';
import { ColleguesUtilisateur } from '../models/CollegueUtilisateur';
import { tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user =new Subject<ColleguesUtilisateur>();
  
  connected= false;
  urlAuth: string = environment.urlAuth;
  constructor(private httpClient: HttpClient) { }

authorizationDeCollegue(collegueAuth:CollegueAuth):Observable<CollegueAuth>{
  return this.httpClient.post<CollegueAuth>(`${this.urlAuth}`,collegueAuth,{withCredentials:true}) .pipe(
    tap(()=>this.connected=true )
  );
}
receiveUtilisateur():Observable<ColleguesUtilisateur>{
  return this.httpClient.post<ColleguesUtilisateur>(`${this.urlAuth}/me`,null, {withCredentials:true});
  
}

deconnexionDeCollegue():any{
  return this.httpClient.post(`${this.urlAuth}/logout`,null, {withCredentials:true}).pipe(
    tap(()=>this.connected=false )
  );
}

isLogin():Observable<boolean>{
 return this.receiveUtilisateur().pipe(
   tap(
     user => {
       this.user.next(user);
       this.connected=true;}
   ),
   map(user=>true)  
 ) 
 
}
 



}
