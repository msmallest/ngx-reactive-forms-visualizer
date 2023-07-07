import {
    Component,
    Input,
    OnInit,
    Signal,
    computed,
    signal,
} from '@angular/core';
import { AbstractControl, FormControlStatus, FormGroup } from '@angular/forms';
import { FormUtilService } from '../internal/services/form-utils.service';

@Component({
    selector: 'lib-validation-status-tree',
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
        return this.formUtil.mapNamesToValidity(
            this.controls(),
            this.controlNames()
        );
    });

    controlNames: Signal<string[]> = computed(() => {
        return this.formUtil.getControlNames(this.form());
    });

    controls: Signal<AbstractControl[]> = computed(() => {
        return this.formUtil.getControls(this.form());
    });

    ngOnInit() {
        this.form.set(this.formGroupElement);
        this.formGroupElement.valueChanges.subscribe((formGroupChange) => {
            this.form.set(this.formGroupElement);
        });
    }
}
