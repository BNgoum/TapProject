/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { HttpClientModule } from '@angular/common/http';
    import { CommonModule } from '@angular/common';
    import { RouterModule } from '@angular/router';

    // Inner
    import { HeaderUserComponent } from "./headerUser.component";
//


/*
Definition & export
*/
    @NgModule({
      declarations: [ HeaderUserComponent ],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterModule
      ],
      exports: [ HeaderUserComponent ]
    })

    export class HeaderUserModule {};
//
