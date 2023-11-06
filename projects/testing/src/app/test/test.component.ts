import { Component, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallPipe, ApplyPipe } from 'ngxtension/call-apply';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

@Component({
    selector: 'app-test',
    standalone: true,
    imports: [CommonModule, CallPipe, ApplyPipe, MatButtonModule, MatDividerModule],
    template: `
        <div>
            <p>Call pipe {{ stuff | call: capsThis }}</p>
            <p>Apply pipe: {{ getTargetFieldPlaceholder | apply: type }}</p>
            <button (click)="setType('solid')">make solid</button>
            <button (click)="setType('liquid')">make liquid</button>
        </div>
        <mat-divider />
        <div>
            <p>count: {{ count() }}</p>
            <p>doubleCount: {{ doubleCount() }}</p>
            <hr />
            <p>countObj: {{ countObj().count }}</p>
            <p>doubleCountObj: {{ doubleCountObj().count }}</p>
            <button (click)="updateValue()" mat-raised-button color="primary">update value</button>
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
}
