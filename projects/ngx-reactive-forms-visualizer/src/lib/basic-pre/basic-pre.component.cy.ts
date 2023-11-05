import { MountConfig } from 'cypress/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { BasicPreComponent } from './basic-pre.component';

describe('BasicPreComponent', () => {
    const config: MountConfig<BasicPreComponent> = {
        imports: [BasicPreComponent],
        componentProperties: {
            formGroupInput: new FormGroup({
                ctrl: new FormControl('a'),
            }),
        },
    };

    it('mounts', () => {
        cy.mount(BasicPreComponent, config);
    });
});
