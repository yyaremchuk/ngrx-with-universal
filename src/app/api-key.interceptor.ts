import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const requestClone = request.clone({
      headers: request.headers
        .set('X-Api-Key', '2a664f43-7381-4ea8-8471-452e24b77f33')
        .set('Accept-Language', 'ru')
    });
    return next.handle(requestClone);
  }
}
