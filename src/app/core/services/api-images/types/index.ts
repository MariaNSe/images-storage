export interface AllImagesData {
  hasMore: boolean;
  page: number;
  pageCount: number;
  pictures: AllImagesList[];
}

export interface ImageDetails {
  author: string;
  camera: string;
  cropped_picture: string;
  full_picture: string;
  id: string;
  tags: string;
}

export interface AllImagesList {
  cropped_picture: string;
  id: string;
}
