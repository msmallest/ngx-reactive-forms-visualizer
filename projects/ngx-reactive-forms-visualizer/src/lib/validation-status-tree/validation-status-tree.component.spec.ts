import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationStatusTreeComponent } from './validation-status-tree.component';

describe('ValidationStatusTreeComponent', () => {
  let component: ValidationStatusTreeComponent;
  let fixture: ComponentFixture<ValidationStatusTreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationStatusTreeComponent]
    });
    fixture = TestBed.createComponent(ValidationStatusTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
