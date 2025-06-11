import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {

    // No agregar token a la petición de login
    if (req.url.includes('/oauth/token')) {
      return next.handle(req);
    }

    let token = this.authService.token;

    if (token != null) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
