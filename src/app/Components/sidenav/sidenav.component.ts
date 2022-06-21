import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  nom = localStorage.getItem('nom');
  selectedMenu: any = 'data';
  //test: string = '';
  test = localStorage.getItem('var');

  constructor(private router: Router) {}

  ngOnInit(): void {
    //this.req();

    // console.log('var: ', this.test);
    // window.location.reload();
    //this.test = history.state.varTest;
    console.log('test: ', this.test);
  }

  goTo(paramText: string) {
    this.selectedMenu = paramText;
  }

  req() {
    // if (localStorage.getItem('var') != null) {
    //   this.test = localStorage.getItem('var');
    // }
    // console.log('var: ', this.test);
    //window.location.reload();
  }

  stat() {
    this.router.navigate(['/stat']);
  }
}
