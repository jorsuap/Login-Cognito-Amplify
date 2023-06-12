/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CognitoServicesService } from './cognito-services.service';

describe('Service: CognitoServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CognitoServicesService]
    });
  });

  it('should ...', inject([CognitoServicesService], (service: CognitoServicesService) => {
    expect(service).toBeTruthy();
  }));
});
