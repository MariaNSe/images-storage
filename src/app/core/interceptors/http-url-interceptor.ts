import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpUrlInterceptor implements HttpInterceptor {
  API_URL = environment.IMAGES_API_ENDPOINT;

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const include =
      request.url.includes('http') || request.url.includes('https');
    const url = include ? request.url : `${this.API_URL}${request.url}`;

    const cloneRequest = request.clone({
      url,
    });

    return next.handle(cloneRequest);
  }
}
