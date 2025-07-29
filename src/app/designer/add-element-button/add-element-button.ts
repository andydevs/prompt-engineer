import { Component, signal } from '@angular/core';
import { ElementType } from '../prompt-element';
import { output } from '@angular/core';

@Component({
  selector: 'app-add-element-button',
  imports: [],
  templateUrl: './add-element-button.html',
  styleUrl: './add-element-button.scss'
})
export class AddElementButton {
  addElement = output<{ type: ElementType }>()

  protected open = signal(false)
  protected types = Object.values<ElementType>(ElementType)

  selectElement(type: ElementType) {
    this.open.set(false)
    this.addElement.emit({ type })
  }

  openMenu() {
    this.open.set(true)
  }
}
