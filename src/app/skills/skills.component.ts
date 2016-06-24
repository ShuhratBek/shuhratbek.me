import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';
import { SkillsService } from './skills.service';
import { ISkill } from './skill.model';

@Component({
    selector: 'skills',
    templateUrl: 'app/skills/skills.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_GRID_LIST_DIRECTIVES
    ],
    providers: [
        SkillsService
    ]
})
export class SkillsComponent implements OnInit{
    items: ISkill[];
    newItem: ISkill;

    constructor(private skillsService: SkillsService) {
        this.clearForm();
    }

    getItems() {
        this.skillsService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
    }

    create() {
        this.items.push(this.newItem);
        this.clearForm();
    }

    clearForm() {
        this.newItem = {
            id: null,
            name: ''
        };
    }

    console() {
        console.info(this.items);
    }
}
