import { Component, input, output, signal } from '@angular/core';
import {
    ElementType,
    FormatColor,
    FormatData,
    FormatIntensity,
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

    protected intensities = Object.values<FormatIntensity>(FormatIntensity);
    protected colors = Object.values<FormatColor>(FormatColor);

    toggleForm() {
        this.open.update(() => !this.open());
    }

    updateFGIntensity(intensity: FormatIntensity) {
        let fmt = this.format();
        this.update.emit({
            type: ElementType.Format,
            format: {
                ...fmt,
                foreground: {
                    ...fmt.foreground,
                    intensity,
                },
            },
        });
    }

    updateFGColor(color: FormatColor) {
        let fmt = this.format();
        this.update.emit({
            type: ElementType.Format,
            format: {
                ...fmt,
                foreground: {
                    ...fmt.foreground,
                    color,
                },
            },
        });
    }
}
