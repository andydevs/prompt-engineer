import { Component, input, output, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { ElementType, PromptElement } from '../../../domain/prompt-element';

@Component({
    selector: 'app-designer-text-element',
    imports: [FormsModule],
    templateUrl: './text-element.html',
    styleUrl: './text-element.scss',
})
export class TextElement {
    text = input.required<string>();
    update = output<PromptElement>();

    protected internalText = signal<string>('');

    constructor() {
        toObservable(this.internalText)
            .pipe(debounceTime(300), distinctUntilChanged())
            .subscribe((value) => {
                this.update.emit({
                    type: ElementType.Text,
                    text: value,
                });
            });
    }
}
