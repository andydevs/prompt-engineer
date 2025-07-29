import { Component, signal } from '@angular/core';
import { ElementType, PromptElement } from '../prompt-element';
import { AddElementButton } from '../add-element-button/add-element-button';

@Component({
  selector: 'app-designer',
  imports: [AddElementButton],
  templateUrl: './designer.html',
  styleUrl: './designer.scss'
})
export class Designer {
  elements = signal<PromptElement[]>([])

  addElement(elem: PromptElement) {
    this.elements.update(elems => [...elems, elem])
  }

  deleteElement(index: number) {
    this.elements.update(es => es.filter((_,i) => i !== index))
  }
}
