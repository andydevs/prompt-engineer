import { Component, computed, input } from '@angular/core';
import { generatePreview, PromptElement } from '../../domain/prompt-element';

@Component({
    selector: 'app-preview',
    imports: [],
    templateUrl: './preview.html',
    styleUrl: './preview.scss',
})
export class Preview {
    elements = input.required<PromptElement[]>();

    protected preview = computed(() => generatePreview(this.elements()));
}
