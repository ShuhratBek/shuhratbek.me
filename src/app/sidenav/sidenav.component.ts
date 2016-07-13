import { Component, OnInit } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { Menu } from './menu.model';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

@Component({
    selector: 'sidenav',
    templateUrl: 'app/sidenav/sidenav.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        ROUTER_DIRECTIVES,
        MD_LIST_DIRECTIVES
    ],
    styles: [`
        .md-list-item {
            color: #fff;
        }
    `],
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
