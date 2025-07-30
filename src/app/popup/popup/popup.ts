import { Component, input } from '@angular/core';

@Component({
    selector: 'app-popup',
    imports: [],
    templateUrl: './popup.html',
    styleUrl: './popup.scss',
})
export class Popup {
    open = input<boolean>();
}
