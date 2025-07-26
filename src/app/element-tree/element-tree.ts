import { Component, input } from '@angular/core';
import { PromptElement,
  isTextElement,
  isComputedElement,
  isFormattedElement
} from '../../domain/prompt-element';
import { TextElement } from '../text-element/text-element';
import { ComputedElement } from '../computed-element/computed-element';
import { FormattedContainer } from '../formatted-container/formatted-container';

@Component({
  selector: 'app-element-tree',
  imports: [TextElement, ComputedElement, FormattedContainer, ElementTree],
  templateUrl: './element-tree.html',
  styleUrl: './element-tree.scss'
})
export class ElementTree {
  elements = input<PromptElement[]>([])
  isTextElement = isTextElement
  isComputedElement = isComputedElement
  isFormattedElement = isFormattedElement
}
