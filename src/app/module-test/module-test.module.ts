import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleTestComponent } from './module-test.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SideComponent } from './Deco/side/side.component';
import { FootComponent } from './Deco/foot/foot.component';
import { NavComponent } from './Deco/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { ModuleTestRoutingModule } from './module-test-routing.module';
import { InputComponent } from './input/input.component';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'module-test', component: ModuleTestComponent },
//   { path: '', redirectTo: 'module-test', pathMatch: 'full' },
// ];

@NgModule({
  imports: [
    CommonModule,
    ModuleTestRoutingModule,
    // RouterModule.forChild(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
  ],
  declarations: [
    ModuleTestComponent,
    LoginComponent,
    SideComponent,
    FootComponent,
    NavComponent,
    InputComponent,
  ],
  exports: [ModuleTestComponent, LoginComponent],
})
export class ModuleTestModule {}
