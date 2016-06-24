import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
        ToolbarComponent,
        ROUTER_DIRECTIVES
    ]
})
export class AppComponent {
    constructor() {}
}
