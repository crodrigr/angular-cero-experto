import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './app/usuario/token.interceptor';
import { provideClientHydration } from '@angular/platform-browser';

// Asegúrate de incluir provideClientHydration()
bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...appConfig.providers!,
    provideClientHydration(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
}).catch((err) => console.error(err));
