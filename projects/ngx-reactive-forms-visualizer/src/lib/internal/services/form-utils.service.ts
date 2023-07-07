import { Injectable } from '@angular/core';
import { AbstractControl, FormControlStatus, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormUtilService {
    constructor() {}

    // Low level utilities

    getControlNames(formGroup: FormGroup) {
        let namesArr: string[] = [];
        for (var property in formGroup.controls) {
            namesArr.push(property);
        }
        console.log(namesArr);
        return namesArr;
    }

    getControls(formGroup: FormGroup) {
        let controlsArr: AbstractControl[] = [];
        Object.keys(formGroup.controls).forEach((key) => {
            if (formGroup.get(key)) {
                controlsArr.push(formGroup.controls[key]);
            }
        });
        return controlsArr;
    }

    // High level utilities

    mapNamesToValidity(
        controls: AbstractControl<any, any>[],
        controlNames: string[]
    ) {
        let obj: { [key: string]: FormControlStatus } = {};
        for (let i = 0; i < controls.length; i++) {
            let controlName = controlNames[i];
            let controlValidity = controls[i].status;

            obj[controlName] = controlValidity;
        }
        return obj;
    }
}
