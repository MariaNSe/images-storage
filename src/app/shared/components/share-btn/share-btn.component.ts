import { Component, Input, OnInit } from '@angular/core';
import { ImageDetails } from '../../../core/services/api-images/types';

@Component({
  selector: 'app-share-btn',
  templateUrl: './share-btn.component.html',
  styleUrls: ['./share-btn.component.scss'],
})
export class ShareBtnComponent {
  public showDropdownContent: boolean;
  telegramIcon = 'assets/images/social-media-icons/telegram.svg';
  mailIcon = 'assets/images/social-media-icons/gmail.svg';
  fbIcon = 'assets/images/social-media-icons/facebook.svg';
  lnIcon = 'assets/images/social-media-icons/linkedin.svg';

  @Input() currentPhoto: ImageDetails;
  private windowParams: string[] = [
    ``,
    `width=450, height=450, scrollbars=yes, resizable=no`,
  ];

  shareLinkToFb(): boolean {
    window.open(
      `http://www.facebook.com/sharer.php?u=${this.currentPhoto?.full_picture}`,
      ...this.windowParams
    );
    return false;
  }

  shareLinkToMail(): boolean {
    window.open(
      `mailto:?subject=${encodeURIComponent(
        this.currentPhoto?.author
      )}&body=${encodeURIComponent(this.currentPhoto?.full_picture)}`
    );
    return false;
  }

  shareLinkToLn(): boolean {
    window.open(
      `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
        this.currentPhoto.full_picture
      )}&title=${encodeURIComponent(this.currentPhoto.author)}`,
      ...this.windowParams
    );
    return false;
  }

  shareLinkToTelegram(): boolean {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(
        this.currentPhoto.full_picture
      )}&text=${encodeURIComponent(this.currentPhoto.author)}`
    );
    return false;
  }

  onButtonClick(): void {
    this.showDropdownContent = !this.showDropdownContent;
  }
}
