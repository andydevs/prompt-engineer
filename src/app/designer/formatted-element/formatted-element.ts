import { booleanAttribute, Component, input } from '@angular/core';
import { Formatted, isComputedElement, isFormattedElement, isTextElement } from '../../../domain/prompt-element';
import { TextElement } from '../text-element/text-element';
import { ComputedElement } from '../computed-element/computed-element';

@Component({
  selector: 'app-formatted-element',
  imports: [TextElement, ComputedElement, FormattedElement],
  templateUrl: './formatted-element.html',
  styleUrl: './formatted-element.scss'
})
export class FormattedElement {
  root = input(false, {transform: booleanAttribute})
  formatted = input.required<Formatted>()

  isTextElement = isTextElement
  isComputedElement = isComputedElement
  isFormattedElement = isFormattedElement
}
