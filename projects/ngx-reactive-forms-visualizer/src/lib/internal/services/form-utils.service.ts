import { Injectable } from '@angular/core';
import { AbstractControl, FormControlStatus, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormUtilService {
    // Low level utilities

    getControlNames(formGroup: FormGroup) {
        const namesArr: string[] = [];
        for (const property in formGroup.controls) {
            namesArr.push(property);
        }
        console.log(namesArr);
        return namesArr;
    }

    getControls(formGroup: FormGroup) {
        const controlsArr: AbstractControl[] = [];
        Object.keys(formGroup.controls).forEach(key => {
            if (formGroup.get(key)) {
                controlsArr.push(formGroup.controls[key]);
            }
        });
        return controlsArr;
    }

    // High level utilities

    mapNamesToValidity(controls: AbstractControl<any, any>[], controlNames: string[]) {
        const obj: { [key: string]: FormControlStatus } = {};
        for (let i = 0; i < controls.length; i++) {
            const controlName = controlNames[i];
            const controlValidity = controls[i].status;

            obj[controlName] = controlValidity;
        }
        return obj;
    }
}
