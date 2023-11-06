import type { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { TestComponent } from '../app/test/test.component';

export default {
    title: 'Test',
    component: TestComponent,
    decorators: [
        moduleMetadata({
            imports: [TestComponent],
        }),
    ],
} as Meta<TestComponent>;

const BasicPre: Story<TestComponent> = (args: TestComponent) => {
    return {
        component: TestComponent,
        template: `<app-test />`,
        props: {
            ...args,
        },
    };
};

export const SimpleState = BasicPre.bind({});
SimpleState.args = {};
