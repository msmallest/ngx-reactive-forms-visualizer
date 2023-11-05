import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallPipe, ApplyPipe } from 'ngxtension/call-apply';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [CommonModule, CallPipe, ApplyPipe],
    template: `
        <div>
            <p>Call pipe {{ stuff | call: capsThis }}</p>
            <p>Apply pipe: {{ getTargetFieldPlaceholder | apply: type }}</p>
            <button (click)="setType('solid')">make solid</button>
            <button (click)="setType('liquid')">make liquid</button>
        </div>
    `,
    styles: [],
})
export class TestComponent {
    stuff = 'stuff';

    type: 'solid' | 'liquid' = 'solid';

    setType(type: 'solid' | 'liquid') {
        this.type = type;
    }

    capsThis(thing: string) {
        return thing.toUpperCase();
    }

    getTargetFieldPlaceholder(type: 'solid' | 'liquid', extraPrompt?: string) {
        return (type === 'solid' ? 'fork' : 'spoon') + (extraPrompt ?? '');
    }
}
