/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { UserPageComponent } from './user-page.component';
    import { HeaderUserModule } from '../../components/headerUser/module';
//


/*
Definition
*/
    @NgModule({
        declarations: [ UserPageComponent ],
        imports: [
            CommonModule,
            Routing,
            HeaderUserModule
        ]
    })
//


/*
Export
*/
    export class Module {};
//
