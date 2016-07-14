import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SidenavService } from './sidenav.service';
import { Menu } from './menu.model';
import { ROUTER_DIRECTIVES, Router }  from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_ICON_DIRECTIVES } from '@angular2-material/icon';

@Component({
    selector: 'sidenav',
    templateUrl: 'app/sidenav/sidenav.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        ROUTER_DIRECTIVES,
        MD_LIST_DIRECTIVES,
        MD_ICON_DIRECTIVES
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
    @Output() onClose = new EventEmitter();
    menus: Menu[];

    constructor(private sidenavService: SidenavService,
        private router: Router) {
    }

    getMenus() {
        this.sidenavService.getMenus().then(menus => this.menus = menus);
    }

    ngOnInit() {
        this.getMenus();
    }

    navigate(link: string) {
        this.router.navigate([link]);
        this.onClose.emit(null);
    }
}
