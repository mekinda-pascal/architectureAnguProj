import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'projetX';
  showToolbar: boolean = false;
  showSidenav: boolean = false;
  showFooter: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event['url'] == '/home') {
          this.showToolbar = false;
          this.showSidenav = false;
          this.showFooter = false;
        } else {
          this.showToolbar = true;
          this.showSidenav = true;
          this.showFooter = true;
        }
      }
    });

    // this.utilisateur = history.state.userFromLogin;
    // console.log('Donnees: ', this.utilisateur);
  }
}
