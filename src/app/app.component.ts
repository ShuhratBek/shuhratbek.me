import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MdIconRegistry } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
        SidenavComponent,
        ROUTER_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES
    ]
})
export class AppComponent {
    constructor(private mdIconRegistry: MdIconRegistry) {
        mdIconRegistry
            .addSvgIcon('search', './icons/search.svg')
            .addSvgIcon('menu', './icons/menu.svg');
    }
}
