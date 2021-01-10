import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { appRoutes } from './app-routing.module';
import { HttpAuthInterceptor, HttpUrlInterceptor } from './core/interceptors';
import { RemoveWhiteSpacesPipe } from './shared/pipes/remove-white-spaces.pipe';

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
];

@NgModule({
  declarations: [AppComponent, RemoveWhiteSpacesPipe],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [...APP_PROVIDERS],
  bootstrap: [AppComponent],
  exports: [RemoveWhiteSpacesPipe],
})
export class AppModule {}
