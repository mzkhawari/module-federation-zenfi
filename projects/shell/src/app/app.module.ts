import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiLibModule } from 'projects/api-lib/src/api-lib.module';
import { UserListComponent } from './users-list/users-list.component';


@NgModule({
  imports: [
    BrowserModule,
    ApiLibModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    NotFoundComponent,

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
