import { Routes } from "@angular/router";
import { MenuComponent } from "./menu/menu.component";
import { GallerieComponent } from "./gallerie/gallerie.component";
import { CourantCollegueComponent } from "./courant-collegue/courant-collegue.component";



export const ROUTES: Routes = [
    {
        path: "accueil",
        component: MenuComponent
    },
    {
        path: "gallerie",
        component:  GallerieComponent
    },
    {
        path: "",
        redirectTo: "/accueil",
        pathMatch: "full"
    },
    {
        path: "gallerie/:matricule",
        component:CourantCollegueComponent
    }
    

];