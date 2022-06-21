import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  test1: string = 'false';
  test2: string = 'true';
  nom1: string = 'Admin';
  nom2: string = 'Employe';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nav() {
    localStorage.setItem('var', this.test1);
    localStorage.setItem('nom', this.nom1);
    // setTimeout(() => {
    // }, 1000);
    //this.router.navigate(['/sidenav'], { state: { varTest: this.test1 } });
    this.router.navigate(['/data']);
    //window.location.reload();
  }

  next() {
    this.router.navigate(['/input']);
    localStorage.setItem('var', this.test2);
    localStorage.setItem('nom', this.nom2);
  }
}
