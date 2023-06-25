import { Component, Input, OnInit, Signal, computed } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormControlStatus,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'lib-validation-status-tree',
  templateUrl: './validation-status-tree.component.html',
  styleUrls: ['./validation-status-tree.component.scss'],
})
export class ValidationStatusTreeComponent implements OnInit {
  @Input({ required: true })
  formGroupElement!: FormGroup;

  namesToValidity: Signal<{
    [key: string]: 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';
  }> = computed(() => {
    let obj: { [key: string]: FormControlStatus } = {};
    for (let i = 0; i < this.controls().length; i++) {
      let controlName = this.controlNames()[i];
      let controlValidity = this.controls()[i].status;

      obj[controlName] = controlValidity;
    }
    return obj;
  });

  controlNames: Signal<string[]> = computed(() => {
    let namesArr: string[] = [];
    for (var property in this.formGroupElement.controls) {
      namesArr.push(property);
    }
    return namesArr;
  });

  controls: Signal<AbstractControl[]> = computed(() => {
    let controlsArr: AbstractControl[] = [];
    Object.keys(this.formGroupElement.controls).forEach((key) => {
      if (this.formGroupElement.get(key)) {
        controlsArr.push(this.formGroupElement.controls[key]);
      }
    });
    return controlsArr;
  });

  ngOnInit() {}
}
