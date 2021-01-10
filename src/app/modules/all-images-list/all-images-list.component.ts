import { Component, OnInit } from '@angular/core';
import { ApiImagesService } from '../../core/services/api-images/api-images.service';
import { AllImagesData } from '../../core/services/api-images/types';

@Component({
  selector: 'app-all-images-list',
  templateUrl: './all-images-list.component.html',
  styleUrls: ['./all-images-list.component.scss'],
})
export class AllImagesListComponent implements OnInit {
  public images: AllImagesData;
  constructor(private apiAllImages: ApiImagesService) {}

  ngOnInit(): void {
    this.apiAllImages.getImagesByPage(2).subscribe((imagesPerPage) => {
      this.images = imagesPerPage;
    });
  }
}
