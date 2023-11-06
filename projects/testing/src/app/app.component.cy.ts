import { MountConfig } from 'cypress/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
    const config: MountConfig<AppComponent> = {
        imports: [AppComponent, BrowserAnimationsModule],
        componentProperties: {},
    };

    // TODO d
    it('mounts', () => {
        cy.mount(AppComponent, config);
    });
});
