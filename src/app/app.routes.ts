import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { GallerieComponent } from './gallerie/gallerie.component';



export const ROUTES: Routes = [
    {
        path: 'accueil',
        component: MenuComponent
    },
    {
        path: 'gallerie',
        component:  GallerieComponent
    },
    {
        path: '',
        redirectTo: '/menu',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/menu',
        pathMatch: 'full'
}

];