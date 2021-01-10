import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/api-auth/api-auth.service';

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.setAccessToken(request)).pipe(
      catchError(async (error: HttpErrorResponse) => {
        if (error.status === 401) {
          // TODO add function if get 401 (unauthorized) which should redirect to login/sing up page
          await this.authService.refreshToken();
          return next.handle(this.setAccessToken(request)).toPromise();
        }
        throw error;
      })
    );
  }

  setAccessToken(request: HttpRequest<any>): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.token}`,
      },
    });
  }
}
