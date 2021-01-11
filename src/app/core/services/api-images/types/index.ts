export interface AllImagesData {
  hasMore: boolean;
  page: number;
  pageCount: number;
  pictures: Array<ShortImageDetails>;
}

export interface ShortImageDetails {
  cropped_picture: string;
  id: string;
}

export interface ImageDetails {
  author: string;
  camera: string;
  cropped_picture: string;
  full_picture: string;
  id: string;
  tags: string;
}
