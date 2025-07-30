import { Component, signal } from '@angular/core';
import { PromptElement } from './domain/prompt-element';
import { Designer } from './designer/designer/designer';
import { Preview } from './preview/preview/preview';
import { Ps1Display } from './ps1/ps1-display/ps1-display';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [Designer, Preview, Ps1Display],
})
export class App {
    elements = signal<PromptElement[]>([]);
}
