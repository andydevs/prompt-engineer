import { Component, signal } from '@angular/core';
import { Designer } from './designer/designer/designer';
import { PromptElement } from './domain/prompt-element';
import { Preview } from './preview/preview/preview';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [Designer, Preview],
})
export class App {
    elements = signal<PromptElement[]>([]);
}
