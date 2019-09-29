/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreatComunityService } from './creatComunity.service';

describe('Service: CreatComunity', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatComunityService]
    });
  });

  it('should ...', inject([CreatComunityService], (service: CreatComunityService) => {
    expect(service).toBeTruthy();
  }));
});
