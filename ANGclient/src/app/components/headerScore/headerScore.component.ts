
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './headerScore.component.html',
  providers: [ AuthService ],
  styleUrls: ['../header/header.css']

})

export class HeaderScoreComponent implements OnInit {

  constructor(private AuthService: AuthService) { }

  logout(){
    this.AuthService.logout();
  }

  ngOnInit() {
  }

}
