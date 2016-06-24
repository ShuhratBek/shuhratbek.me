import { Component, OnInit } from '@angular/core';
import { ToolbarService } from './toolbar.service';
import { Menu } from './menu.model';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'toolbar',
    templateUrl: 'app/toolbar/toolbar.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        ROUTER_DIRECTIVES
    ],
    providers: [
        ToolbarService
    ]
})
export class ToolbarComponent implements OnInit{
    menus: Menu[];

    constructor(private toolbarService: ToolbarService) {
    }

    getMenus() {
        this.toolbarService.getMenus().then(menus => this.menus = menus);
    }

    ngOnInit() {
        this.getMenus();
    }
}
