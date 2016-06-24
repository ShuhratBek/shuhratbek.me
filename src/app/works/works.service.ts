import { Injectable } from '@angular/core';
import { WORKS } from './mock-works';

@Injectable()
export class WorksService {
    getWorks() {
        return Promise.resolve(WORKS);
    }
}
