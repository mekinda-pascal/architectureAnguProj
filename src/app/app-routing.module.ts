import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatComponent } from './Pages/stat/stat.component';
import { TestComponent } from './Pages/test/test.component';
import { DataComponent } from './Pages/data/data.component';
import { ParamComponent } from './Pages/param/param.component';
import { TestDetailComponent } from './Pages/test-detail/test-detail.component';
import { DataDetailComponent } from './Pages/data-detail/data-detail.component';
import { HomeComponent } from './Pages/home/home.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { ModuleTestComponent } from './module-test/module-test.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'stat', component: StatComponent },
  { path: 'data', component: DataComponent },
  { path: 'param', component: ParamComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'test/detail', component: TestDetailComponent },
  { path: 'data/detail', component: DataDetailComponent },
  { path: 'module-test/module-test', component: ModuleTestComponent },
  // {
  //   path: 'module-test',
  //   loadChildren: () =>
  //     import('src/app/module-test/module-test.module').then(
  //       (m) => m.ModuleTestModule
  //     ),
  // },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
