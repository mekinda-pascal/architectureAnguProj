import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgChartsModule } from 'ng2-charts';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { TestComponent } from './Pages/test/test.component';
import { DataComponent } from './Pages/data/data.component';
import { StatComponent } from './Pages/stat/stat.component';
import { ParamComponent } from './Pages/param/param.component';
import { DataDetailComponent } from './Pages/data-detail/data-detail.component';
import { InterceptorService } from './loader/interceptor.service';
import { TestDetailComponent } from './Pages/test-detail/test-detail.component';
import { ModuleTestModule } from './module-test/module-test.module';
import { HomeComponent } from './Pages/home/home.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    TestComponent,
    DataComponent,
    StatComponent,
    ParamComponent,
    DataDetailComponent,
    TestDetailComponent,
    HomeComponent,
    AccueilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatListModule,
    MatFormFieldModule,
    HttpClientModule,
    NgChartsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    ModuleTestModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
