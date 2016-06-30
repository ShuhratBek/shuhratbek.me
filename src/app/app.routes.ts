import { RouterConfig, provideRouter } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { WorksComponent } from './works';
import { ContactsComponent } from './contacts';
import { SkillsComponent } from './skills';
import { CompaniesComponent } from './companies';

export const routes: RouterConfig = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'works', component: WorksComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'companies', component: CompaniesComponent }
];
export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
