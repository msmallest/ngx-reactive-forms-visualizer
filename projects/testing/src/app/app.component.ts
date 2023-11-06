import { Component, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { NgIf, JsonPipe } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TestClass } from 'modelsZZZZ/test-model.model';
import { TestComponent } from './test/test.component';
import { BasicPreComponent, ValidationStatusTreeComponent } from 'ngx-reactive-forms-visualizer';
// import { BasicPreComponent, ValidationStatusTreeComponent } from 'dist/ngx-reactive-forms-visualizer';
// import { BasicPreComponent, ValidationStatusTreeComponent } from 'projects/ngx-reactive-forms-visualizer';
import { MatButtonModule } from '@angular/material/button';

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
        TestComponent,
        MatButtonModule,
    ],
})
export class AppComponent {
    exampleForm = this.fb.group({
        name: ['', Validators.required],
        town: [''],
        addressNumber: [null],
        nickname: [''],
    });
    snippet = '<pre>{{form.value | json}}</pre>';

    thing!: TestClass;

    stuff = null;

    arr = ['1', '2'];

    count: WritableSignal<number> = signal(1);
    doubleCount: Signal<number> = computed(() => this.count() * 2);

    countObj: WritableSignal<{ name: string; count: number }> = signal({
        name: 'thingy',
        count: 1,
    });
    doubleCountObj: Signal<{ name: string; count: number }> = computed(() => {
        return { name: this.countObj().name, count: this.countObj().count * 2 };
    });

    updateValue() {
        this.count.update(value => value + 1);
        this.countObj.update(value => {
            return { name: value.name, count: value.count + 1 };
        });
    }

    constructor(private fb: NonNullableFormBuilder) {
        effect(() => {
            console.log(`The current count is`);
        });
    }
}
