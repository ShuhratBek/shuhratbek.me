import { Component, OnInit } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MD_TOOLBAR_DIRECTIVES } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { CompaniesService } from './companies.service';
import { ICompany } from '../shared';
import * as _ from 'lodash/index';

@Component({
    selector: 'skills',
    templateUrl: 'app/skills/skills.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES,
        MD_INPUT_DIRECTIVES,
        MD_CARD_DIRECTIVES,
        MD_TOOLBAR_DIRECTIVES
    ],
    styles: [`
        .block {
            padding: 4px;
        }
    `],
    providers: [
        CompaniesService
    ]
})
export class CompaniesComponent implements OnInit {
    items: ICompany[];
    model: ICompany;

    constructor(private companiesService: CompaniesService) {
    }

    getItems() {
        this.companiesService.getItems().then(items => this.items = items);
    }

    ngOnInit() {
        this.getItems();
    }


    maxValue() {
        if (this.items) {
            let res: ICompany = _.maxBy(this.items, x => x.id);
            return res.id + 1;
        }
    }
}
