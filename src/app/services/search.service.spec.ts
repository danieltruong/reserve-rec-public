import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { ConfigService } from './config.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient, HttpHandler],
      providers: [ConfigService]
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
