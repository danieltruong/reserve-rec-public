import { TestBed } from '@angular/core/testing';

import { SearchService } from './search.service';
import { ConfigService } from './config.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('SearchService', () => {
  let service: SearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ConfigService, provideHttpClientTesting]
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
