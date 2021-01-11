import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app-routing.module';
import { HttpAuthInterceptor, HttpUrlInterceptor } from './core/interceptors';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export const APP_PROVIDERS = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpAuthInterceptor,
    multi: true,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpUrlInterceptor,
    multi: true,
  },
  {
    provide: MatDialogRef,
    useValue: {},
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    NoopAnimationsModule,
    MatDialogModule,
    MatIconModule,
  ],
  providers: [...APP_PROVIDERS],
  bootstrap: [AppComponent],
  exports: [],
})
export class AppModule {}
