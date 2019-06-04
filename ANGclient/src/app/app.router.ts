/*
Imports
https://gist.github.com/DWS-paris/886a33b6d5b0afecefc13595a807036d
*/
    // Angular
    import { Routes } from '@angular/router';

    // Import AuthGuuard to define route accessibility
    import { AuthGuard } from "./auth.guard";
    import { AuthHomeGuard } from "./auth.home.guard";
//

/*
Export
*/
    export const MainRouter: Routes = [
        {
            path: '',
            loadChildren: './routes/home-page/module#Module',
            canActivate: [ AuthHomeGuard ] // Prevent for connected user
        },
        {
            path: 'identity-validation',
            loadChildren: './routes/identity-validation/module#Module'
        },
        {
            path: 'reset-password',
            loadChildren: './routes/reset-password-page/module#Module',
            canActivate: [ AuthGuard ] // Accessible for connected user
        },
        {
            path: 'me',
            loadChildren: './routes/user-page/module#Module',
            canActivate: [ AuthGuard ] // Accessible for connected user
        },
        {
            path: 'scores',
            loadChildren: './routes/score-page/module#Module',
            canActivate: [ AuthGuard ] // Accessible for connected user
        }
    ];
//
