/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from '@angular/router';

    // Inner
    import { HeaderScoreComponent } from "./headerScore.component";
//


/*
Definition & export
*/
    @NgModule({
      declarations: [ HeaderScoreComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
      ],
      exports: [ HeaderScoreComponent ]
    })

    export class HeaderScoreModule {};
//
