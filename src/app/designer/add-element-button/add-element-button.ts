import { Component, signal } from '@angular/core';
import { Popup } from '../../popup/popup/popup';
import { ElementType } from '../../domain/prompt-element';
import { output } from '@angular/core';

@Component({
    selector: 'app-add-element-button',
    imports: [Popup],
    templateUrl: './add-element-button.html',
    styleUrl: './add-element-button.scss',
})
export class AddElementButton {
    addElement = output<{ type: ElementType }>();

    protected open = signal(false);
    protected types = Object.values<ElementType>(ElementType);

    selectElement(type: ElementType) {
        this.open.set(false);
        this.addElement.emit({ type });
    }

    openMenu() {
        this.open.set(true);
    }
}
