import { MountConfig } from 'cypress/angular';
import { BasicPreComponent } from 'ngx-reactive-forms-visualizer';
import { FormControl, FormGroup } from '@angular/forms';

describe('HeaderComponent', () => {
    const config: MountConfig<BasicPreComponent> = {
        imports: [BasicPreComponent],
        componentProperties: {
            formGroupInput: new FormGroup({
                ctrl: new FormControl('a')
            })
        }
    }

    it('mounts', () => {
        cy.mount(BasicPreComponent, config)
    });
});
