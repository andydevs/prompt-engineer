import { Component, input, output } from '@angular/core';
import { ComputedValue, ElementType, PromptElement } from '../../prompt-element';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-designer-computed-element',
  imports: [FormsModule],
  templateUrl: './computed-element.html',
  styleUrl: './computed-element.scss'
})
export class ComputedElement {
  value = input.required<ComputedValue>()
  update = output<PromptElement>()

  protected types = Object.values<ComputedValue>(ComputedValue)

  updateValue(value: ComputedValue) {
    console.log(value)
    this.update.emit({
      type: ElementType.Computed,
      value: value
    })
  }
}
