/*
Imports & definition
*/
  // Imports
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router"

  // Inner
  import { AuthService } from "../../services/auth/auth-service.service";
  import { GameService } from "../../services/game/game-service.service";

  // Definition
  @Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    providers: [ AuthService, GameService ],
    styleUrls: ['./user-page.css']
  })
//


/*
Export
*/
  export class UserPageComponent implements OnInit {

    numberTap: number
    userId: string
    isTaped: boolean
    isStarted: boolean

    /*
    Config.
    */
      // Module injection
      constructor(private AuthService: AuthService, private GameService: GameService, private router: Router) {
        this.numberTap = 0;
      };
    //

    /*
    Methods
    */

   startGame(){
    this.isStarted = true;

      const timer = setTimeout(() => {
        if(this.isStarted){
          this.endGame();
          this.isStarted = false;
          clearTimeout(timer);
        }
      }, 10000);
    }

    onTapButton(){
      this.numberTap++;

      if(this.numberTap > 0){
        this.startGame();
      }
    }

    endGame(){
      this.GameService.saveScore(this.numberTap);
      this.router.navigate(['/scores']);
    };

    /*
    Hooks
    */
      ngOnInit() {
        document.querySelector('#button-tap').addEventListener("mousedown", () => {
          this.isTaped = true;
        });

        document.querySelector('#button-tap').addEventListener("mouseup", () => {
          this.isTaped = false;
        });
      };
    //
  }
//
