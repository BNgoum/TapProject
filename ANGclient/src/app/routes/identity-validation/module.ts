/*
Imports
*/
    // Angular
    import { NgModule } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';

    // Inner
    import { Routing } from './router';
    import { IdentityValidationComponent } from './identity-validation.component';
    import { FormResponseModule } from "../../components/form-response/module";
    import { HeaderModule } from './../../components/header/module';
//


/*
Definition
*/
    @NgModule({
        declarations: [ IdentityValidationComponent ],
        imports: [
            CommonModule,
            Routing,
            FormsModule,
            ReactiveFormsModule,
            FormResponseModule,
            HeaderModule
        ]
    })
//


/*
Export
*/
    export class Module {};
//
