import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

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

  constructor(private router: Router) {
    // Removing Sidebar, Navbar, Footer for Documentation, Error and Auth pages
    router.events.forEach((event) => {
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
  }

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

    // Scroll to top after route change
    this.router.events.subscribe((url: any) => {
      if (!(url instanceof NavigationEnd)) {
        if (this.router.url === '/home') {
          this.showToolbar = false;
          this.showSidenav = false;
          this.showFooter = false;
          return;
        } else {
          this.showToolbar = true;
          this.showSidenav = true;
          this.showFooter = true;
        }
      }
    });
  }
}
