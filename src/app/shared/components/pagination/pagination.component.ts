import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pageModel: { page: number };
  @Input() maxPages: number;
  public currentPage: number;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onChangePage = new EventEmitter();

  pages: any[] = [];

  ngOnInit(): void {
    if (this.maxPages) {
      this.createPages();
    }
  }

  setPage(page: number): void {
    this.currentPage = this.pageModel.page = page;
    this.onChangePage.emit(this.pageModel);
  }

  createPages(): void {
    for (let i = 1; i <= this.maxPages; i++) {
      this.pages.push(i);
    }
  }
}
