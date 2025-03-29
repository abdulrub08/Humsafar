import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes, withComponentInputBinding, withRouterConfig } from '@angular/router';
const routes: Routes = [    
    { path: '**', redirectTo: 'home' } // Wildcard route for unknown paths
  ];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
      })
    ),
  ],
  //providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};
