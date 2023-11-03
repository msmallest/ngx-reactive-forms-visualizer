import { Component, Input, OnInit, Signal, computed, signal } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormUtilService } from '../internal/services/form-utils.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'lib-validation-status-tree',
    standalone: true,
    imports: [CommonModule],
    template: `
        <pre>{{ this.namesToValidity() | json }}</pre>
        <pre>Validity: {{ formGroupElement.status | json }}</pre>
    `,
    styles: [],
})
export class ValidationStatusTreeComponent implements OnInit {
    @Input({ required: true })
    formGroupElement!: FormGroup;

    form = signal(new FormGroup({}));

    constructor(private formUtil: FormUtilService) {}

    namesToValidity: Signal<{
        [key: string]: 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';
    }> = computed(() => {
        return this.formUtil.mapNamesToValidity(this.controls(), this.controlNames());
    });

    controlNames: Signal<string[]> = computed(() => {
        return this.formUtil.getControlNames(this.form());
    });

    controls: Signal<AbstractControl[]> = computed(() => {
        return this.formUtil.getControls(this.form());
    });

    ngOnInit() {
        this.form.set(this.formGroupElement);
        this.formGroupElement.valueChanges.subscribe(formGroupChange => {
            this.form.set(this.formGroupElement);
        });
    }
}
