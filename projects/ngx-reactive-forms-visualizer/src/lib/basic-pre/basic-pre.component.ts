import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'lib-basic-pre',
    standalone: true,
    imports: [CommonModule],
    template: `<pre>{{ formGroupInput.value | json }}</pre>`,
    styles: [],
})
export class BasicPreComponent implements OnInit {
    @Input({ required: true })
    formGroupInput!: FormGroup;

    arr = ['1', '2'];

    ngOnInit() {
        console.log('logged');
    }
}
