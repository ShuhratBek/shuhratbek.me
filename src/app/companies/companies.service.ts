import { Injectable } from '@angular/core';
import { COMPANIES } from './mock-companies';

@Injectable()
export class CompaniesService {
    getItems() {
        return Promise.resolve(COMPANIES);
    }
}
