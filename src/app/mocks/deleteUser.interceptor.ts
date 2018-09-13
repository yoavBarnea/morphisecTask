import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { User } from "../admin/models/user";

@Injectable()
export class DeleteMockInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.includes("admin/users") && req.method === "DELETE") {
      return of(new HttpResponse<User>({ body: null, status: 200 }));
    }

    return next.handle(req);
  }
}
