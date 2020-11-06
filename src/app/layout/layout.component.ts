import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  router: string;

  constructor(
    private _router: Router
  ) { 
    this._router.events.pipe(filter(e => e instanceof NavigationEnd))
    .subscribe((s: NavigationEnd) => {
      this.router = s.url; 
    });
  }

  ngOnInit(): void {
  }

}
