import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicPreComponent, ValidationStatusTreeComponent } from 'ngx-reactive-forms-visualizer';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf, JsonPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        NgIf,
        MatDividerModule,
        MatCardModule,
        BasicPreComponent,
        ValidationStatusTreeComponent,
        JsonPipe,
    ],
})
export class AppComponent implements OnInit {
    exampleForm = this.fb.group({
        name: ['', Validators.required],
        town: [''],
        addressNumber: [null],
        nickname: [''],
    });
    snippet = '<pre>{{form.value | json}}</pre>';

    constructor(private fb: NonNullableFormBuilder) {}

    ngOnInit() {}
}
