import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Observable, of } from "rxjs";
import { User } from "../models/user";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  users: User[];
  url = "https://api.morphisec/admin/users";
  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    this.http
      .get<User[]>(this.url)
      .subscribe(users => (this.users = users))
      .unsubscribe();
  }

  deleteUser(selectedUserId) {
    const url = this.url + "/" + selectedUserId;
    return this.http.delete(url).pipe(
      tap(() => {
        const i = this.users.findIndex(user => user.id === selectedUserId);
        this.users.splice(i, 1);
        console.log("users", this.users);
      })
    );
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.url, JSON.stringify(user)).pipe(
      tap(u => {
        this.users.push(u);
        console.log("users", this.users);
      })
    );
  }
}
