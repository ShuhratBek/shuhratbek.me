import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'home',
    templateUrl: 'app/home/home.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES
    ]
})
export class HomeComponent {
}
