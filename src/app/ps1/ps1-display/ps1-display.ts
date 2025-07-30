import { Component, computed, input } from '@angular/core';
import { generatePS1, PromptElement } from '../../domain/prompt-element';

@Component({
    selector: 'app-ps1-display',
    imports: [],
    templateUrl: './ps1-display.html',
    styleUrl: './ps1-display.scss',
})
export class Ps1Display {
    elements = input.required<PromptElement[]>();

    ps1 = computed(() => generatePS1(this.elements()));
}
