/*
Imports & definition
*/
  // Imports
  import { Component, OnInit } from '@angular/core';

  // Inner
  import { GameService } from "../../services/game/game-service.service";

  const formatDate = date => `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}h${date.getMinutes()}m${date.getSeconds()}s`;

  const mappingScore = scores => scores.map(
    ({
      score,
      player,
      updated_at
    }) => ({
      username: player.username,
      point: score,
      date: formatDate(new Date(updated_at))
    })
  );

  // Definition
  @Component({
    selector: 'app-score-page',
    templateUrl: './score-page.component.html',
    providers: [ GameService ],
    styleUrls: ['./score-page.css']
  })
//


/*
Export
*/
  export class ScorePageComponent implements OnInit {

    listScore: Array<any>

    /*
    Config.
    */
      // Module injection
      constructor(private GameService: GameService) {

      };
    //

    /*
    Methods
    */

    /*
    Hooks
    */
      ngOnInit() {
        this.GameService.getListScore().then(({ data }) => {
          this.listScore = mappingScore(data.scores);
        });
      };
    //
  }
//
