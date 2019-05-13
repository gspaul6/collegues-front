import { Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { GallerieComponent } from "./gallerie/gallerie.component";
import { CourantCollegueComponent } from "./courant-collegue/courant-collegue.component";
import { LoginComponent } from './login/login.component';
import {ConnexionGuardGuard} from './services/connexion-guard.service'



export const ROUTES: Routes = [
    {
        path: "accueil",canActivate: [ConnexionGuardGuard],
        component: MenuComponent
    },
    {
        path: "gallerie", canActivate: [ConnexionGuardGuard],
        component:  GallerieComponent
    },
    {
        path:"login", canActivate: [ConnexionGuardGuard],
        component: LoginComponent
    },
    {
        path: "", canActivate: [ConnexionGuardGuard],
        redirectTo: "/login",
        pathMatch: "full"
    },
    {
        path: "gallerie/:matricule", canActivate: [ConnexionGuardGuard],
        component:CourantCollegueComponent
    }

];