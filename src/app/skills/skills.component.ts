import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { SkillsService } from './skills.service';
import { FormSkillComponent } from './form-skill';
import { ISkill } from '../shared';
import * as _ from 'lodash/index';

@Component({
    selector: 'skills',
    templateUrl: 'app/skills/skills.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES,
        MD_GRID_LIST_DIRECTIVES,
        FormSkillComponent
    ],
    providers: [
        SkillsService
    ]
})
export class SkillsComponent implements OnInit {
    items: ISkill[];

    constructor(private skillsService: SkillsService) {
    }

    getItems() {
        this.skillsService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
    }


    maxValue() {
        if (this.items) {
            let res: ISkill = _.maxBy(this.items, x => x.id);
            return res.id + 1;
        }
    }
}
