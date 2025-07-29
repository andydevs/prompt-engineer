import { Component, input } from '@angular/core';
import { ComputedValue } from '../../../domain/prompt-element';

@Component({
  selector: 'app-computed-element',
  imports: [],
  templateUrl: './computed-element.html',
  styleUrl: './computed-element.scss'
})
export class ComputedElement {
  value = input<ComputedValue>(ComputedValue.PromptSymbol)
}
