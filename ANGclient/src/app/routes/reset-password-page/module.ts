/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    // Inner
    import { Routing } from './router';
    import { ResetPasswordPageComponent } from './reset-password-page.component';
    import { FormResponseModule } from "../../components/form-response/module";
    import { HeaderUserModule } from './../../components/headerUser/module';
//


/*
Definition
*/
    @NgModule({
        declarations: [ ResetPasswordPageComponent ],
        imports: [
            CommonModule,
            Routing,
            FormsModule,
            ReactiveFormsModule,
            FormResponseModule,
            HeaderUserModule
        ]
    })
//


/*
Export
*/
    export class Module {};
//
