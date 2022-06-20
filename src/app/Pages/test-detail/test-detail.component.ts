import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { User } from 'src/app/Modeles/user.modele';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.css'],
})
export class TestDetailComponent implements OnInit {
  don = new User();

  constructor(
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    public loaderService: LoaderService
  ) {
    this.spinner.show();
  }

  ngOnInit(): void {
    this.don = history.state.userFromList;
    console.log('donnees: ', this.don);
  }

  public backToList(): void {
    window.history.back();
  }
}
