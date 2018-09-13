import { Injectable } from "@angular/core";
import { Photo } from "../../models/photo";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { PHOTOS } from "../../core/mocks/api.photos";
// const photosUrl = environment.photosUrl;

@Injectable({
  providedIn: "root"
})
export class GalleryService {
  constructor(private httpClient: HttpClient) {}

  loadPhotos(): Observable<Photo[]> {
    const photosLocation = "assets/photos/";

    // mock service
    return of(PHOTOS).pipe(
      map(photos => {
        photos.forEach(x => {
          x.url = photosLocation + x.name;
        });
        return photos;
      })
    );

    // return this.httpClient.get<Photo[]>(photosUrl).pipe(map(x => {x.url=photosUrl+x.name })
  }
}
