import { Injectable } from '@angular/core';
import { SKILLS } from './mock-skills';

@Injectable()
export class SkillsService {
    getItems() {
        return Promise.resolve(SKILLS);
    }
}
