import { RouterConfig, provideRouter } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { WorksComponent } from './works';
import { ContactsComponent } from './contacts';
import { SkillsComponent } from './skills';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'works', component: WorksComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'skills', component: SkillsComponent }
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
