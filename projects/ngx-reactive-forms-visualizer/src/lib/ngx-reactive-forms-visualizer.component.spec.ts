import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxReactiveFormsVisualizerComponent } from './ngx-reactive-forms-visualizer.component';

describe('NgxReactiveFormsVisualizerComponent', () => {
  let component: NgxReactiveFormsVisualizerComponent;
  let fixture: ComponentFixture<NgxReactiveFormsVisualizerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxReactiveFormsVisualizerComponent]
    });
    fixture = TestBed.createComponent(NgxReactiveFormsVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
