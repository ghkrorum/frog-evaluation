import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hasUser: boolean;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.auth.hasUser()
    .subscribe( user => {
      if (user == null){
        this.hasUser = false;
      }else{
        this.hasUser = true;
      }
    })
  }

  logout(){
    this.auth.logout()
    .then(() => {
      this.router.navigate(['./home']);
    });
  }
}
