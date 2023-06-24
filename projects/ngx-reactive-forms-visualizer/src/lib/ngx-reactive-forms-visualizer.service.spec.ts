import { TestBed } from '@angular/core/testing';

import { NgxReactiveFormsVisualizerService } from './ngx-reactive-forms-visualizer.service';

describe('NgxReactiveFormsVisualizerService', () => {
  let service: NgxReactiveFormsVisualizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxReactiveFormsVisualizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
