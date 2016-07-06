import { Injectable } from '@angular/core';
import { MENUS } from './mock-sidenav';

@Injectable()
export class SidenavService {
    getMenus() {
        return Promise.resolve(MENUS);
    }
}
