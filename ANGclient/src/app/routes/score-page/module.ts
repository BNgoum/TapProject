/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';

    // Inner
    import { Routing } from './router';
    import { ScorePageComponent } from './score-page.component';
    import { HeaderScoreModule } from '../../components/headerScore/module';
//


/*
Definition
*/
    @NgModule({
        declarations: [ ScorePageComponent ],
        imports: [
            CommonModule,
            Routing,
            HeaderScoreModule
        ]
    })
//


/*
Export
*/
    export class Module {};
//
