import { Component, computed, input } from '@angular/core';
import {
    generatePreviewElements,
    PromptElement,
} from '../../domain/prompt-element';

@Component({
    selector: 'app-preview',
    imports: [],
    templateUrl: './preview.html',
    styleUrl: './preview.scss',
})
export class Preview {
    elements = input.required<PromptElement[]>();

    protected previewElements = computed(() =>
        generatePreviewElements(this.elements()),
    );
}
