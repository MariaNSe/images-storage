import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AllImagesData } from '../../core/services/api-images/types';
import { ApiImagesService } from '../../core/services/api-images/api-images.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ModalWindowComponent } from '../../shared/components/modal-window/modal-window.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-images-gallery',
  templateUrl: './images-gallery.component.html',
  styleUrls: ['./images-gallery.component.scss'],
})
export class ImagesGalleryComponent implements OnInit, OnDestroy {
  public images: AllImagesData;
  public page: number;
  public isLoading: boolean;
  private destroyed$ = new Subject();
  showModal = false;
  @ViewChild(ModalWindowComponent) popup: ModalWindowComponent;

  constructor(
    private apiAllImages: ApiImagesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.apiAllImages.getImagesByPage(1).subscribe((imagesPerPage) => {
      this.images = imagesPerPage;
    });
  }

  onImageClick(id: string): void {
    this.dialog.open(ModalWindowComponent, {
      height: '96%',
      width: '100%',
      data: {
        imagesIds: this.images.pictures.map((item) => item.id),
        currentId: id,
      },
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
    this.apiAllImages
      .getImagesByPage(this.page)
      .pipe(takeUntil(this.destroyed$))
      .subscribe(
        (imagesPerPage) => {
          this.isLoading = false;
          this.images = imagesPerPage;
        },
        (error) => {
          this.isLoading = false;
        }
      );
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
