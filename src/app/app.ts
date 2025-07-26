import { Component, signal } from '@angular/core';
import { TextElement } from "./text-element/text-element";
import { DateElement } from "./date-element/date-element";

enum ElementType {
    Text = 'text',
    Date = 'date'
}

interface PromptElement {
    type: ElementType
}

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [TextElement, DateElement]
})
export class App {
    elements = signal<PromptElement[]>([
        {
            type: ElementType.Text
        },
        {
            type: ElementType.Date
        },
        {
            type: ElementType.Text
        }
    ])
}
