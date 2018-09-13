import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
import { Photo } from "../../models/photo";
import { NgbModal } from "node_modules/@ng-bootstrap/ng-bootstrap";
import { GalleryService } from "../../services/gallery/gallery.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.scss"]
})
export class PhotosComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  photos: Photo[] = [];
  constructor(
    private galleryService: GalleryService,
    private ngbModal: NgbModal
  ) {}
  selectedPhoto = null;
  ngOnInit() {
    this.loadPhotos();
  }

  loadPhotos() {
    this.subscription = this.galleryService
      .loadPhotos()
      .subscribe(photos => (this.photos = photos));
  }
  lightBox(selectedPhoto, vModal) {
    this.selectedPhoto = selectedPhoto;
    this.ngbModal
      .open(vModal, {
        size: "lg",
        centered: true
      })
      .result.then(
        result => {
          this.selectedPhoto = null;
        },
        reason => {
          this.selectedPhoto = null;
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
