import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { CoreRoutingModule } from "./core-routing.module";
import { MainNavbarComponent } from "./main-navbar/main-navbar.component";
import { PhotosComponent } from "./photos/photos.component";
import { AboutComponent } from "./about/about.component";

@NgModule({
  imports: [SharedModule, CoreRoutingModule],
  declarations: [MainNavbarComponent, PhotosComponent, AboutComponent],
  exports: [SharedModule, MainNavbarComponent, PhotosComponent, AboutComponent]
})
export class CoreModule {}
