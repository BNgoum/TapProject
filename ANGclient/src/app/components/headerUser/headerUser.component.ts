
import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth/auth-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './headerUser.component.html',
  providers: [ AuthService ],
  styleUrls: ['../header/header.css']
})

export class HeaderUserComponent implements OnInit {

  username: string

  constructor(private AuthService: AuthService) { }

  logout(){
    this.AuthService.logout();
  }

  ngOnInit() {
    this.AuthService.getUserId().then(({ data }) => {
      this.username = data.username;
    })
  }

}
