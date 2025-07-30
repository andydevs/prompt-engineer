import { Component, input, output, signal } from '@angular/core';
import {
    ElementType,
    FormatData,
    PromptElement,
} from '../../../domain/prompt-element';
import { Popup } from '../../../popup/popup/popup';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-designer-format-element',
    imports: [Popup, FormsModule],
    templateUrl: './format-element.html',
    styleUrl: './format-element.scss',
})
export class FormatElement {
    format = input.required<FormatData>();
    update = output<PromptElement>();

    protected open = signal<boolean>(false);

    toggleForm() {
        this.open.update(() => !this.open());
    }

    updateParam(param: boolean) {
        this.update.emit({
            type: ElementType.Format,
            format: {
                ...this.format(),
                param,
            },
        });
    }
}
