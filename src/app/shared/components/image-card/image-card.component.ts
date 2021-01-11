import {Component, Input} from '@angular/core';
import {ShortImageDetails} from '../../../core/services/api-images/types';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input() imageData: ShortImageDetails;
}
