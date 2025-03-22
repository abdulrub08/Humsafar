import { provideRouter, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./general/general.module').then(m => m.GeneralModule) },
    { path: '**', redirectTo: '' }
];
export const AppRoutingModule = provideRouter(routes);