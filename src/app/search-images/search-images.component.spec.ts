import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SearchImagesComponent } from './search-images.component';

describe('SearchImagesComponent', () => {
  let component: SearchImagesComponent;
  let fixture: ComponentFixture<SearchImagesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
