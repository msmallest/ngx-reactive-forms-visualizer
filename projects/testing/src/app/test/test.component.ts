import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallPipe } from 'ngxtension/call-apply';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [CommonModule, CallPipe],
    template: `
        <div>
            <p>{{ stuff | call: capsThis }}</p>
        </div>
    `,
    styles: [],
})
export class TestComponent {
    stuff = 'stuff';

    capsThis(thing: string) {
        return thing.toUpperCase();
    }
}
