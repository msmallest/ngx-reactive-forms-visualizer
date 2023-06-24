import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  exampleForm = this.fb.group({
    name: [''],
    town: [''],
    addressNumber: [null],
  });
  snippet = '<pre>{{form.value | json}}</pre>';
  constructor(private fb: NonNullableFormBuilder) {}

  ngOnInit() {}
}
