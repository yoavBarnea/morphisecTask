import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ManageUsersRoutingModule } from "./manage-users-routing.module";
import { UsersComponent } from "./users/users.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { UserListComponent } from "./user-list/user-list.component";
import { SharedModule } from "../../shared/shared.module";
import { UsersService } from "../services/users.service";

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    // FormsModule,
    //  ReactiveFormsModule,
    ManageUsersRoutingModule
  ],
  declarations: [UsersComponent, AddUserComponent, UserListComponent],
  providers: [UsersService]
})
export class ManageUsersModule {}
