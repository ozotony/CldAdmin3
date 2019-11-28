/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgRegisterServiceService } from './ng-register-service.service';

describe('NgRegisterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgRegisterServiceService]
    });
  });

  it('should ...', inject([NgRegisterServiceService], (service: NgRegisterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
