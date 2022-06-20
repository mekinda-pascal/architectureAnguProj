import { Component, OnInit } from '@angular/core';
import { FalseData } from '../../Modeles/falsedata.modele';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.css'],
})
export class DataDetailComponent implements OnInit {
  don = new FalseData();
  constructor() {}

  ngOnInit(): void {
    this.don = history.state.userFromList;
    console.log('donnees: ', this.don);
  }

  public backToList(): void {
    window.history.back();
  }
}
