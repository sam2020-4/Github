import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitNavbarComponent } from './git-navbar/git-navbar.component';
// import { FooterComponent } from './footer/footer.component';
import { GitDetailsComponent } from './git-details/git-details.component';
import { GitFormComponent } from './git-form/git-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';

@NgModule({
  declarations: [
    AppComponent,
    GitNavbarComponent,
    // FooterComponent,
    GitDetailsComponent,
    GitFormComponent,
    RepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // FooterComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
