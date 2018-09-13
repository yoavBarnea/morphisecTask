import { UsersService } from "./../../services/users.service";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { User } from "../../models/user";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.scss"]
})
export class UserListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private userService: UsersService, private ngbModal: NgbModal) {}

  confirmBeforeDeleteUser(selectedUser, vModal) {
    this.ngbModal
      .open(vModal, {
        ariaLabelledBy: "confirm modal ",
        size: "sm",
        centered: true
      })
      .result.then(
        result => {
          console.log(result);
          if (result) {
            this.deleteUser(selectedUser.id);
          }
        },
        reason => {
          // nothing
        }
      );
  }

  private deleteUser(selectedUserId) {
    this.subscription = this.userService.deleteUser(selectedUserId).subscribe();
  }

  get users(): User[] {
    return this.userService.users;
  }

  // life sycle hooks
  ngOnInit() {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
