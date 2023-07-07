import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicPreComponent } from './basic-pre.component';

describe('BasicPreComponent', () => {
    let component: BasicPreComponent;
    let fixture: ComponentFixture<BasicPreComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BasicPreComponent],
        });
        fixture = TestBed.createComponent(BasicPreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
