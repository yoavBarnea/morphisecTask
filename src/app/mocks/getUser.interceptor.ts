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
import { USERS } from "./users";

@Injectable()
export class GetUsersMockInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.endsWith("admin/users") && req.method === "GET") {
      // const users = JSON.stringify(USERS);
      return of(new HttpResponse<User[]>({ body: USERS, status: 200 }));
    }

    return next.handle(req);
  }
}
