import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  nom = 'Pascal';
  @Input()
  InputSide!: MatSidenav;

  constructor() {}

  ngOnInit(): void {}
}
