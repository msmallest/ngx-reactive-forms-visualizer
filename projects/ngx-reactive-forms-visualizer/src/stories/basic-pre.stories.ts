import type { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { FormControl, FormGroup } from '@angular/forms';
import { BasicPreComponent } from '../lib/basic-pre/basic-pre.component';

export default {
    title: 'Basic Pre',
    component: BasicPreComponent,
    decorators: [
        moduleMetadata({
            imports: [BasicPreComponent],
        }),
    ],
} as Meta<BasicPreComponent>;

const BasicPre: Story<BasicPreComponent> = (args: BasicPreComponent) => {
    const formGroup = new FormGroup({
        type: new FormControl('simple'),
        groupingLogic: new FormControl('and'),
    });

    return {
        component: BasicPreComponent,
        template: `<lib-basic-pre [formGroupInput]="formGroupInput" />`,
        props: {
            ...args,
            formGroupInput: formGroup,
        },
    };
};

export const SimpleState = BasicPre.bind({});
SimpleState.args = {};
