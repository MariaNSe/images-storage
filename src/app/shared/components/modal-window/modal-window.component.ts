import {
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiImagesService } from '../../../core/services/api-images/api-images.service';
import { ArrowsDirections, ModalViewImagesData } from './types';
import { ImageDetails } from '../../../core/services/api-images/types';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss'],
})
export class ModalWindowComponent implements OnInit, OnDestroy {
  @Input() bodyContent: TemplateRef<any>;
  public currentPhoto: ImageDetails;
  private destroyed$ = new Subject();
  constructor(
    private apiAllImages: ApiImagesService,
    @Inject(MAT_DIALOG_DATA) public data: ModalViewImagesData,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getImageDetails(this.data.currentId);
  }

  close(): void {
    this.dialog.closeAll();
  }

  previousImage(): void {
    this.toggleImage(ArrowsDirections.Previous);
  }

  nextImage(): void {
    this.toggleImage(ArrowsDirections.Next);
  }

  toggleImage(direction: ArrowsDirections): void {
    const currentIndex = this.data.imagesIds.indexOf(this.currentPhoto.id);
    const targetIndex =
      direction === ArrowsDirections.Previous
        ? currentIndex - 1
        : currentIndex + 1;
    const targetImageId = this.data.imagesIds[targetIndex];
    this.getImageDetails(targetImageId);
  }

  getImageDetails(id: string): void {
    this.apiAllImages
      .getImageDetails(id)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((currentPicture) => {
        this.currentPhoto = currentPicture;
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
