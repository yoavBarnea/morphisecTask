import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Subscription } from "rxjs";
import { UsersService } from "./../../services/users.service";

@Component({
  selector: "app-add-user",
  templateUrl: "./add-user.component.html",
  styleUrls: ["./add-user.component.scss"]
})
export class AddUserComponent implements OnInit, OnDestroy {
  constructor(public usersService: UsersService) {}

  addUserForm: FormGroup;
  subscription: Subscription;
  createForm() {
    this.addUserForm = new FormGroup({
      name: new FormControl("", Validators.required),
      email: new FormControl("", [Validators.required, Validators.email]),
      role: new FormControl("user")
    });
  }

  get name() {
    return this.addUserForm.get("name");
  }
  get email() {
    return this.addUserForm.get("email");
  }
  get role() {
    return this.addUserForm.get("role");
  }

  onSubmit() {
    console.log("onSubmit");
    this.subscription = this.usersService
      .addUser(this.addUserForm.value)
      .subscribe(user => {
        this.addUserForm.reset();
      });
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
