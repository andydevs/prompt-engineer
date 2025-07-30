import { Component, input, output } from '@angular/core';
import {
    isComputed,
    isFormat,
    isReset,
    isText,
    PromptElement,
} from '../../../domain/prompt-element';
import { TextElement } from '../text-element/text-element';
import { ComputedElement } from '../computed-element/computed-element';
import { FormatElement } from '../format-element/format-element';
import { ResetElement } from '../reset-element/reset-element';

@Component({
    selector: 'app-designer-element',
    imports: [TextElement, ComputedElement, FormatElement, ResetElement],
    templateUrl: './element.html',
    styleUrl: './element.scss',
})
export class Element {
    element = input.required<PromptElement>();
    delete = output();
    update = output<PromptElement>();

    isText = isText;
    isComputed = isComputed;
    isFormat = isFormat;
    isReset = isReset;

    deleteSelf() {
        this.delete.emit();
    }

    updateSelf(elem: PromptElement) {
        this.update.emit(elem);
    }
}
