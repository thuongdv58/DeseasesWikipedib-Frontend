import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { DeseasesComponent } from './deseases/deseases.component';
import { DeseaseDetailComponent } from './desease-detail/desease-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { AddDeseaseComponent } from './add-desease/add-desease.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    DeseasesComponent,
    DeseaseDetailComponent,
    AddDeseaseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
