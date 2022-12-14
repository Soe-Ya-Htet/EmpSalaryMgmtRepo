import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeSearchComponent,
    CsvUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
