import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-configurable-component',
    standalone: true,
    imports: [CommonModule],
    template: ` <h1>{{ title }}</h1> `,
    styles: [],
})
export class ConfigurableComponentComponent {
    title = 'Title of Page';
}
