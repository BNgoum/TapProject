/*
Imports
*/
// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// Inner components
import { AuthService} from "./services/auth/auth-service.service";
import { AppComponent } from './app.component';
import { MainRouter } from './app.router';

  // Inner modules


/*
Definition
*/
  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot( MainRouter, { onSameUrlNavigation: 'reload' } ),
    ],
    providers: [ AuthService ],
    bootstrap: [ AppComponent ]
  })
//

/*
Export
*/
  export class AppModule { }
//
