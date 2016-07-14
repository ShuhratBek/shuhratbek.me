import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_ICON_DIRECTIVES, MdIconRegistry } from '@angular2-material/icon';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    directives: [
        SidenavComponent,
        ROUTER_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        MD_ICON_DIRECTIVES,
        MD_BUTTON_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES
    ],
    styles: [`
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        md-sidenav-layout {
            background: rgba(0,0,0,0.03);
        }
        .sidenav {
            min-width: 300px;
            background: rgba(0,0,0,0.7);
            color: #fff;
        }
    `],
    providers: [
        MdIconRegistry
    ]
})
export class AppComponent {
    constructor(private mdIconRegistry: MdIconRegistry) {
        mdIconRegistry
            .addSvgIcon('search', './icons/search.svg')
            .addSvgIcon('menu', './icons/menu.svg');
    }
}
