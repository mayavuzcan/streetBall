/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CreatPlayerService } from './CreatPlayer.service';

describe('Service: CreatPlayer', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CreatPlayerService]
    });
  });

  it('should ...', inject([CreatPlayerService], (service: CreatPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
