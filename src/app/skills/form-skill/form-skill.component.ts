import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { SkillsService } from '../skills.service';
import { Skill } from './skill.model';

@Component({
    selector: 'form-skill',
    templateUrl: 'app/skills/form-skill/form-skill.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_CARD_DIRECTIVES
    ]
})
export class FormSkillComponent implements OnInit {
    model = new Skill(0, 'ghg');

    constructor(private skillsService: SkillsService) {
    }

    ngOnInit() {
    }

    save() {
        console.log(this.model);
    }
}
