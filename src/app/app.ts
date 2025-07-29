import { Component } from '@angular/core';
import { Designer } from './designer/designer/designer';

@Component({
    selector: 'app-root',
    templateUrl: './app.html',
    styleUrl: './app.scss',
    imports: [Designer]
})
export class App {
    
}
