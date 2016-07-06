import { Component, OnInit } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { Menu } from './menu.model';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';

@Component({
    selector: 'sidenav',
    templateUrl: 'app/sidenav/sidenav.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        MD_SIDENAV_DIRECTIVES,
        ROUTER_DIRECTIVES
    ],
    providers: [
        SidenavService
    ]
})
export class SidenavComponent implements OnInit {
    menus: Menu[];

    constructor(private sidenavService: SidenavService) {
    }

    getMenus() {
        this.sidenavService.getMenus().then(menus => this.menus = menus);
    }

    ngOnInit() {
        this.getMenus();
    }
}
