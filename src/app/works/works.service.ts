import { Injectable } from '@angular/core';
import { WORKS } from './mock-works';

@Injectable()
export class WorksService {
    getItems() {
        return Promise.resolve(WORKS);
    }
}
