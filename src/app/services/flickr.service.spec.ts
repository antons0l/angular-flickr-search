import { TestBed } from '@angular/core/testing';

import { FlickrService } from './flickr.service';

describe('FlickrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrService = TestBed.get(FlickrService);
    expect(service).toBeTruthy();
  });
});
