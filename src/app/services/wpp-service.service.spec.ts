import { TestBed } from '@angular/core/testing';
import { WppServiceService } from './wpp-service.service';


describe('WppServiceService', () => {
  let service: WppServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WppServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
