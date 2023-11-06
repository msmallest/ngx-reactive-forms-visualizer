// Import the actual component, with absolute path

// Basic storybook dependencies
import type { Meta, Story } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { userEvent, within } from '@storybook/testing-library';

// Most common dependencies
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Sometimes common dependencies
import { RouterTestingModule } from '@angular/router/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BasicPreComponent } from 'ngx-reactive-forms-visualizer';

export default {
    // Prefix App's name Or 'Library' for hierarchy
    // Example:
    //    title: 'Library/Divider'
    //    titel: 'Appcloud Admin Portal/Login'
    title: 'Basic Pre',
    component: BasicPreComponent,
    decorators: [
        moduleMetadata({
            // These are the most common imports we use; remove unneeded ones as it makes sense, or add your own
            imports: [BasicPreComponent],
        }),
    ],
} as Meta<BasicPreComponent>;

const GroupingLogicComplexTemplate: Story<BasicPreComponent> = (args: BasicPreComponent) => {
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

export const SimpleState = GroupingLogicComplexTemplate.bind({});
SimpleState.args = {};
// SimpleState.play = async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     await expect(canvas.getByText('AND')).toBeInTheDocument();
//     await expect(canvas.getByText('OR')).toBeInTheDocument();
// };
