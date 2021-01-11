import {Component, OnDestroy, OnInit} from '@angular/core';
import {AllImagesData} from '../../core/services/api-images/types';
import {ApiImagesService} from '../../core/services/api-images/api-images.service';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.scss']
})
export class ImagesGalleryComponent implements OnInit, OnDestroy {
  public images: AllImagesData;
  public page: number;
  public isLoading: boolean;
  private destroyed$ = new Subject();

  constructor(private apiAllImages: ApiImagesService) {}

  ngOnInit(): void {
    this.apiAllImages.getImagesByPage(1).subscribe((imagesPerPage) => {
      this.images = imagesPerPage;
    });
  }

  onChangedPage(event): void {
    this.page = event.page;
    this.loadImagesByPage(this.page);
  }

  loadImagesByPage(page: number): void {
    const params = new URLSearchParams();
    params.set('page', page.toString());
    this.isLoading = true;
    this.apiAllImages.getImagesByPage(this.page).pipe(takeUntil(this.destroyed$)).subscribe((imagesPerPage) => {
      this.isLoading = false;
      this.images = imagesPerPage;
    }, error => {
      this.isLoading = false;
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
