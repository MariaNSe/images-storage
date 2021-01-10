import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { AllImagesData, ImageDetails } from './types';

@Injectable({ providedIn: 'root' })
export class ApiImagesService {
  constructor(private httpClient: HttpClient) {}
  public url = `${environment.IMAGES_API_ENDPOINT}`;

  getImagesByPage(pageNumber: number): Observable<AllImagesData> {
    return this.httpClient.get<AllImagesData>(
      `${this.url}/images?page=${pageNumber}`
    );
  }

  getImageDetails(id: number): Observable<ImageDetails> {
    return this.httpClient.get<ImageDetails>(`${this.url}/images/${id}`);
  }
}
