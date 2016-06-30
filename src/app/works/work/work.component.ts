import { Component, Input } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { Work } from '../work.model';

@Component({
    selector: 'work',
    templateUrl: 'app/works/work/work.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        MD_CARD_DIRECTIVES
    ]
})
export class WorkComponent {
    @Input() detail: Work;
}
