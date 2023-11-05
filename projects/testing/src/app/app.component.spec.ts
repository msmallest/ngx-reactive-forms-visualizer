import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('Commponent: App', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppComponent],
        });

        // create component and test fixture
        fixture = TestBed.createComponent(AppComponent);

        // get test component from the fixture
        component = fixture.componentInstance;
    });

    it('has arr len 2', () => {
        expect(component.arr.length).toBe(2);
    });
});
