import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurableComponentComponent } from './configurable-component.component';

describe('ConfigurableComponentComponent', () => {
    let component: ConfigurableComponentComponent;
    let fixture: ComponentFixture<ConfigurableComponentComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ConfigurableComponentComponent],
        });
        fixture = TestBed.createComponent(ConfigurableComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
