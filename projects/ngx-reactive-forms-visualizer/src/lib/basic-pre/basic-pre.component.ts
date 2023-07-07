import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'lib-basic-pre',
    templateUrl: './basic-pre.component.html',
    styleUrls: ['./basic-pre.component.scss'],
})
export class BasicPreComponent {
    @Input({ required: true })
    formGroupInput!: FormGroup;

    constructor() {}
}
