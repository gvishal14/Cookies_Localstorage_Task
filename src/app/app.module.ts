import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CookieService } from 'ngx-cookie-service';
import { NgxWebstorageModule } from 'ngx-webstorage';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
