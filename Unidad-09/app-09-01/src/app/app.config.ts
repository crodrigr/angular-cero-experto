// src/app/app.config.ts
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient ,withInterceptorsFromDi} from '@angular/common/http'; // ✅ Importar esto
import { provideAnimations } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './usuario/token.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withInterceptorsFromDi()), 
    provideAnimations()
  ]
};
