import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { WorksService } from './works.service';
import { Work } from './work.model';

@Component({
    selector: 'works',
    templateUrl: 'app/works/works.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES
    ],
    providers: [
        WorksService
    ]
})
export class WorksComponent implements OnInit{
    works: Work[];

    constructor(private worksService: WorksService) {
    }

    getWorks() {
        this.worksService.getWorks().then(works => this.works = works);
    }

    ngOnInit() {
        this.getWorks();
    }
}
