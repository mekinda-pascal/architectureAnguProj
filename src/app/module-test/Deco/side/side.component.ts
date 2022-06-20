import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css'],
})
export class SideComponent implements OnInit {
  nom = 'Pascal';
  selectedMenu: any = 'data';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  goTo(paramText: string) {
    this.selectedMenu = paramText;
  }

  stat() {
    this.router.navigate(['/stat']);
  }

  data() {
    this.router.navigate(['/data']);
  }

  test() {
    this.router.navigate(['/test']);
  }
}
