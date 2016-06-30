import { Component } from '@angular/core';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
    selector: 'contacts',
    templateUrl: 'app/contacts/contacts.component.html',
    directives: [
        MD_BUTTON_DIRECTIVES
    ]
})
export class ContactsComponent {
}
