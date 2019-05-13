import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ConnexionGuardGuard implements CanActivate {
  constructor(private router: Router, private service: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean|UrlTree> {
      // retourne `true` si l'utilisateur est connecté ou redirige vers la page de /login
      return this.service.isLogin()
      .pipe(
        catchError(()=>of(this.router.parseUrl('/login'))));
  }
  
}
