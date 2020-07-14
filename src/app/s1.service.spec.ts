import { TestBed } from '@angular/core/testing';

import { S1Service } from './s1.service';
// import { of } from 'rxjs/internal/observable/of';
// import { of } from 'rxjs';

describe('S1Service', () => {
  let service: S1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [S1Service]
    });
    service = TestBed.get(S1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
