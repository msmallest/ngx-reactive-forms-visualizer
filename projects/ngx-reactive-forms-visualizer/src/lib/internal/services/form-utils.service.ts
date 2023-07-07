import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable({
    providedIn: 'root',
})
export class FormUtilService {
    constructor() {}

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
}
