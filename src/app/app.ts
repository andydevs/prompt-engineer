import { Component, computed, signal } from '@angular/core';
import { PromptElement, ElementType, ComputedValue, promptExample, promptPS1 } from "../domain/prompt-element";
import { ElementTree } from "./element-tree/element-tree";

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [ElementTree]
})
export class App {
    elements = signal<PromptElement[]>([
        {
            type: ElementType.Formatted,
            subtree: [
                {
                    type: ElementType.Text,
                    text: '['
                },
                {
                    type: ElementType.Computed,
                    value: ComputedValue.Time
                } as PromptElement,
                {
                    type: ElementType.Text,
                    text: ']'
                }
            ] as PromptElement[]
        },
        {
            type: ElementType.Formatted,
            subtree: [
                {
                    type: ElementType.Computed,
                    value: ComputedValue.User
                } as PromptElement,
                {
                    type: ElementType.Text,
                    text: '@',
                },
                {
                    type: ElementType.Computed,
                    value: ComputedValue.Host
                } as PromptElement,
            ]
        },
        {
            type: ElementType.Formatted,
            subtree: [
                {
                    type: ElementType.Computed,
                    value: ComputedValue.WorkingDirectory
                }
            ]
        } as PromptElement,
        {
            type: ElementType.Computed,
            value: ComputedValue.PromptSymbol
        }
    ] as PromptElement[])

    example = computed(() => this.elements().map(promptExample).join(' '))

    ps1 = computed(() => '"' + this.elements().map(promptPS1).join(' ') + '"')
}
