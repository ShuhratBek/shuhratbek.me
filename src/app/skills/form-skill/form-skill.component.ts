import { Component } from '@angular/core';
import { NgForm, FORM_DIRECTIVES }    from '@angular/forms';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { SkillsService } from '../skills.service';
import { Skill } from './skill.model';

export interface IISkill {
    id: number;
    name: string;
}
@Component({
    selector: 'form-skill',
    templateUrl: 'app/skills/form-skill/form-skill.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        FORM_DIRECTIVES
    ]
})
export class FormSkillComponent {
    model = new Skill(1, '');
    submitted = false;

    onSubmit() {
        this.submitted = true;
        console.log(this.model);
    }

    active = true;

    save() {
        // this.model = new Skill(1, '');
        this.active = false;
        setTimeout(() => this.active = true, 0);
        console.log(this.model);
    }
}
