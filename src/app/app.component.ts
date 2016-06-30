import { Component } from '@angular/core';
import { ToolbarComponent } from './toolbar';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdIconRegistry } from '@angular2-material/icon';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
        ToolbarComponent,
        ROUTER_DIRECTIVES
    ]
})
export class AppComponent {
    constructor(private mdIconRegistry: MdIconRegistry) {
        mdIconRegistry.addSvgIcon('search', '../src/images/icons/search.svg');
    }
}
