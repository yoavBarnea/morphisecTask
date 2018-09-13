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
export class AddUserMockInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith("admin/users") && req.method === "POST") {
      const id = Math.ceil(Math.random() * 1000);
      const body = JSON.parse(req.body);
      const user = { id: id, ...body };
      return of(new HttpResponse<User>({ body: user, status: 200 }));
    }

    return next.handle(req);
  }
}
