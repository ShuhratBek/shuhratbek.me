import { Injectable } from '@angular/core';
import { MENUS } from './mock-toolbar';

@Injectable()
export class ToolbarService {
    getMenus() {
        return Promise.resolve(MENUS);
    }
}
