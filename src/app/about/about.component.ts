import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'about',
    templateUrl: 'app/about/about.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES
    ]
})
export class AboutComponent implements OnInit{

    constructor() {}

    ngOnInit() {}
}
