import {
  Component,
  Input,
  OnInit,
  Signal,
  computed,
  signal,
} from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormControlStatus,
  FormGroup,
} from '@angular/forms';
import { FormUtilService } from '../internal/services/form-utils.service';

@Component({
  selector: 'lib-validation-status-tree',
  templateUrl: './validation-status-tree.component.html',
  styleUrls: ['./validation-status-tree.component.scss'],
})
export class ValidationStatusTreeComponent implements OnInit {
  @Input({ required: true })
  formGroupElement!: FormGroup;
  form = signal(new FormGroup({}));

  constructor(private formUtil: FormUtilService) {}

  namesToValidity: Signal<{
    [key: string]: 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED';
  }> = computed(() => {
    let obj: { [key: string]: FormControlStatus } = {};
    for (let i = 0; i < this.controls().length; i++) {
      let controlName = this.controlNames()[i];
      let controlValidity = this.controls()[i].status;

      obj[controlName] = controlValidity;
    }
    console.log(obj);
    return obj;
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
