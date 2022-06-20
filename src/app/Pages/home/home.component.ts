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

  constructor(private router: Router) {}

  ngOnInit(): void {}

  nav() {
    localStorage.setItem('var', this.test1);
    this.router.navigate(['/data']);
    //window.location.reload();
  }

  next() {
    this.router.navigate(['/input']);
    localStorage.setItem('var', this.test2);
  }
}
