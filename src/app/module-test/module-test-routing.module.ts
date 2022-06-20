import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModuleTestComponent } from './module-test.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'input', component: InputComponent },
  { path: 'module-test', component: ModuleTestComponent },
  { path: '', redirectTo: 'module-test', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class ModuleTestRoutingModule {}
