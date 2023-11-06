import { TestBed, ComponentFixture } from '@angular/core/testing';
import { BasicPreComponent } from './basic-pre.component';

describe('Commponent: Basic Pre', () => {
    let component: BasicPreComponent;
    let fixture: ComponentFixture<BasicPreComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [BasicPreComponent],
        });

        // create component and test fixture
        fixture = TestBed.createComponent(BasicPreComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('has arr len 2', () => {
        expect(component.arr.length).toBe(2);
    });
});
