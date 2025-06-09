// ------------------- main.ts
import 'zone.js'; // Solo para navegador, no "zone.js/node"
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    provideHttpClient(),
    ...(appConfig.providers || [])
  ]
}).catch(err => console.error(err));
