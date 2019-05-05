import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './http-interceptor.service';
import { MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, MainComponent, FooterComponent],
  imports: [
    CommonModule, RouterModule, HttpClientModule, MatToolbarModule
  ],
  exports:[LayoutComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule { }
