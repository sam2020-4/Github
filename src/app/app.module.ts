import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitNavbarComponent } from './git-navbar/git-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { GitDetailsComponent } from './git-details/git-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GitNavbarComponent,
    FooterComponent,
    GitDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
