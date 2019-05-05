import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpErrorResponse, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MessagesStoreService } from './messages-store.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(private router: Router, private messagesStore: MessagesStoreService) {

  }
  public intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap((resp: HttpResponse<any>) => this.sendUrl(resp)));
  }

  private sendUrl(request: HttpResponse<any>) {
    this.messagesStore.dispatch(request.url);
  }

}
