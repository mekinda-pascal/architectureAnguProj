import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { APIService } from 'src/app/Services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoaderService } from 'src/app/loader/loader.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FalseData } from '../../Modeles/falsedata.modele';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css'],
})
export class DataComponent implements OnInit {
  donnees: FalseData[] = [];
  filtre: any;
  title: string = 'Liste de donnees';

  constructor(
    private ApiData: APIService,
    private toastr: ToastrService,
    private router: Router,
    private spinner: NgxSpinnerService,
    public loaderService: LoaderService
  ) {
    this.spinner.show();
  }

  ngOnInit(): void {
    this.listData();
  }

  public listData() {
    this.ApiData.getFalseData().subscribe(
      (data: any) => {
        //console.log('Succes');
        console.log('data: ', data);
        this.donnees = data;
        console.log('donnees: ', this.donnees);
        this.toastr.success('Données bien retournées');
      },
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            console.error('Error Event');
            this.toastr.error('Une erreur est survenue');
          } else {
            switch (error.status) {
              case 401: //Unauthorized
                this.toastr.error('Unauthorized');

                break;

              case 403: //forbidden
                this.toastr.error('Acces interdit');
                break;

              case 404: // Not found
                this.toastr.error('Not found');

                break;

              case 500: // Internal server error
                if (error.error.code == 101) {
                  this.toastr.warning(error.error.message);
                } else {
                  this.toastr.error("Une erreur s'est produite");
                }

                break;

              case 0: // unknow error
                this.toastr.error('Verifiez votre connexion internet');

                break;

              default:
                this.toastr.error("Une erreur s'est produite");

                break;
            }
          }
        } else {
          this.toastr.error('Une erreur est survenue');
        }
      }
    );
  }

  public openParticularActivity(don: FalseData) {
    this.router.navigate(['/data/detail'], {
      state: { userFromList: don },
    });
  }
}
