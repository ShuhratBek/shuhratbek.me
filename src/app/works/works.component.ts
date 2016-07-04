import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { WorksService } from './works.service';
import { IWork } from './work.model';
import { WorkComponent } from './work';

@Component({
    selector: 'works',
    templateUrl: 'app/works/works.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        WorkComponent
    ],
    providers: [
        WorksService
    ]
})
export class WorksComponent implements OnInit {
    items: IWork[];

    constructor(private worksService: WorksService) {
    }

    getItems() {
        this.worksService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
    }
}
