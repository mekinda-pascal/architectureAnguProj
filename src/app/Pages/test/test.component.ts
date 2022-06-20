import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/loader/loader.service';
import { APIService } from 'src/app/Services/api.service';
import { User } from '../../Modeles/user.modele';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  donnees: User[] = [];
  listeLabels: string[] = [];
  listeId: number[] = [];

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
    //this.listUserData();

    this.graphStat();
  }

  async graphStat() {
    // setTimeout(() => {
    //   //window.location.reload();
    //   this.listUserData();
    // }, 10000);

    await this.listUserData();

    const myNEwChart = new Chart('graphe2', {
      type: 'doughnut',
      data: {
        //labels: ['Red', 'Blue', 'Yellow'],
        labels: this.listeLabels,
        datasets: [
          {
            label: 'My First dataset',
            //data: [300, 50, 100],
            data: this.listeId,
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
            borderColor: ['rgba(255, 99, 132, 1)'],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  public listUserData() {
    return new Promise<void>((resolve, reject) => {
      this.ApiData.getUserData().subscribe(
        (data: any) => {
          this.donnees = data.data;
          console.log('donnees: ', this.donnees);

          for (let i = 0; i < 6; i++) {
            //console.log('donnees1: ', this.donnees[i].id); this.donnees.length
            this.listeId.push(this.donnees[i].id);
          }
          console.log('ListeId: ', this.listeId);

          for (let i = 0; i < this.donnees.length; i++) {
            //console.log('donnees1: ', this.donnees[i].first_name);
            this.listeLabels.push(this.donnees[i].first_name);
          }
          console.log('listeLabels: ', this.listeLabels);

          this.toastr.success('Données bien retournées');
          resolve();

          this.toastr.success('Stat bien retournées');
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
    });
  }

  public openParticularActivity(don: User) {
    this.router.navigate(['/test/detail'], {
      state: { userFromList: don },
    });
  }
}
