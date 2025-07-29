import { Component, computed, signal } from '@angular/core';
import { FormattedElement } from "./formatted-element/formatted-element";
import { PromptElement, ElementType, ComputedValue, promptExample, promptPS1, Formatted } from "../domain/prompt-element";

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [FormattedElement]
})
export class App {
    formatted = signal<Formatted>({
        type: ElementType.Formatted,
        subtree: [
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
        ] as PromptElement[]
    })

    example = computed(() => this.formatted().subtree.map(promptExample).join(' '))

    ps1 = computed(() => '"' + this.formatted().subtree.map(promptPS1).join(' ') + '"')
}
