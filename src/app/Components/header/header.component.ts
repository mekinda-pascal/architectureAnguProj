import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  nom = localStorage.getItem('nom');
  @Input()
  InputSidenav!: MatSidenav;

  constructor() {}

  ngOnInit(): void {}
}
