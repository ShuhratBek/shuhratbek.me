import { Injectable } from '@angular/core';
import { WORKS } from './mock-works';

@Injectable()
export class WorksService {
    getItems() {
        return Promise.resolve(WORKS);
    }
    addNew() {
        WORKS.push({
            title: '15',
                type: 1,
            description: '5456',
            image: '521635',
            images: [
                '3515'
            ],
            created: 11
        });
    }
}
