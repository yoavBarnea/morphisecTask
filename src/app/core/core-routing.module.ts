import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { PhotosComponent } from "./photos/photos.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/about",
    pathMatch: "full"
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "photos",
    component: PhotosComponent
  },
   {
     path: "admin",
     loadChildren: "../admin/admin.module#AdminModule"
   },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
