/// <reference path="../typings/index.d.ts"/>

import 'reflect-metadata';
import 'zone.js/dist/zone';
import { bootstrap } from '@angular/platform-browser-dynamic';

import './index.scss';

import { AppComponent } from './app';

import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import '@angular2-material/core';
import { MdIconRegistry } from '@angular2-material/icon';

declare var process: any;
if (process.env.NODE_ENV === 'production') {
    enableProdMode();
}

bootstrap( AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS,
    MdIconRegistry
]);
