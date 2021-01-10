import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllImagesListComponent } from './all-images-list.component';

describe('AllImagesListComponent', () => {
  let component: AllImagesListComponent;
  let fixture: ComponentFixture<AllImagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllImagesListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllImagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
