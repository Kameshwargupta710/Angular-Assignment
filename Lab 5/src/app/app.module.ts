import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';



const appRoutes: Routes=[
  {path :'Add Movies',component: AddMoviesComponent},
  {path :'Search Movies',component: SearchMoviesComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    AddMoviesComponent,
    SearchMoviesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
