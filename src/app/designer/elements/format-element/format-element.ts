import { Component, input, output } from '@angular/core';
import { FormatData, PromptElement } from '../../prompt-element';

@Component({
  selector: 'app-designer-format-element',
  imports: [],
  templateUrl: './format-element.html',
  styleUrl: './format-element.scss'
})
export class FormatElement {
  format = input.required<FormatData>()
  update = output<PromptElement>()
}
