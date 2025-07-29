import { Component, input, output } from '@angular/core';
import { isComputed, isFormat, isReset, isText, PromptElement } from '../../prompt-element';
import { TextElement } from '../text-element/text-element';

@Component({
  selector: 'app-designer-element',
  imports: [TextElement],
  templateUrl: './element.html',
  styleUrl: './element.scss'
})
export class Element {
  element = input.required<PromptElement>()
  delete = output()
  update = output<PromptElement>()

  isText = isText
  isComputed = isComputed
  isFormat = isFormat
  isReset = isReset

  deleteSelf() {
    this.delete.emit()
  }

  updateSelf(elem: PromptElement) {
    this.update.emit(elem)
  }
}
