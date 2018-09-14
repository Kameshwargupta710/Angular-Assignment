import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserService } from './app.service'
import { HttpClientModule } from '@angular/common/http';
import { ProductFilterPipeAuthor } from './product-filter-author.pipe';
import { FormsModule } from '@angular/forms'
import { ProductFilterPipeYear } from './product-filter-year.pipe';
import { ProductFilterPipeName } from './product-filter-name.pipe';
import { ProductFilterPipeId } from './product-filter-id.pipe';


import { } from ''
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFilterPipeAuthor,
    ProductFilterPipeYear,
    ProductFilterPipeName,
    ProductFilterPipeId
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
