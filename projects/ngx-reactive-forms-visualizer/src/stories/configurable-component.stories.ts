// Import the actual component, with absolute path

import type { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { ConfigurableComponentComponent } from '../lib/configurable-component/configurable-component.component';

export default {
    title: 'Configurable Component',
    component: ConfigurableComponentComponent,
    decorators: [
        moduleMetadata({
            imports: [ConfigurableComponentComponent],
        }),
    ],
} as Meta<ConfigurableComponentComponent>;

const ConfigurableComponentTemplate: Story<ConfigurableComponentComponent> = (args: ConfigurableComponentComponent) => {
    return {
        component: ConfigurableComponentComponent,
        template: `<lib-configurable-component />`,
        props: {
            ...args,
        },
    };
};

export const SimpleState = ConfigurableComponentTemplate.bind({});
SimpleState.args = {};
