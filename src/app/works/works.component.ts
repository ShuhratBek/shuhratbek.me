import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { WorksService } from './works.service';
import { IWork } from './work.model';
import { WorkComponent } from './work';
import { MD_GRID_LIST_DIRECTIVES } from '@angular2-material/grid-list';

@Component({
    selector: 'works',
    templateUrl: 'app/works/works.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        WorkComponent,
        MD_GRID_LIST_DIRECTIVES
    ],
    providers: [
        WorksService
    ]
})
export class WorksComponent implements OnInit {
    items: IWork[];
    // ratios: any = [
    //     3/12,
    //     6/12,
    //     9/12,
    //     12/12,
    //     15/12,
    //     18/12,
    //     21/12
    // ];

    constructor(private worksService: WorksService) {
    }

    getItems() {
        this.worksService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
    }
    //
    // getRowspan(image: any, size: string) {
    //     switch (size) {
    //         case 'lg':
    //             return 12;
    //         default:
    //             var ratio = image.meta.height / image.meta.width;
    //             var i;
    //             for (i = this.ratios.length; i > 0; i--) {
    //                 var cur = this.ratios[i - 1];
    //                 if (!this.ratios[i - 2] || ratio > cur) {
    //                     ratio = cur;
    //                     break;
    //                 }
    //             }
    //             return ratio * 12;
    //     }
    // }
    //
    // getColspan (image: any, size: string) {
    //     switch (size) {
    //         case 'lg':
    //             var ratio = image.meta.width / image.meta.height;
    //             var i;
    //             for (i = 0; i < this.ratios.length; i++) {
    //                 var cur = this.ratios[i];
    //                 if (!this.ratios[i + 1] || ratio < cur) {
    //                     ratio = cur;
    //                     break;
    //                 }
    //             }
    //             return ratio * 12;
    //         default:
    //             return 12;
    //     }
    // }
}
