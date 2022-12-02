import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CsvUploadComponent } from './csv-upload/csv-upload.component';
import { EmployeeSearchComponent } from './employee-search/employee-search.component';


const routes: Routes = [
  {path:"",redirectTo:"search", pathMatch:"full"},
  {path:"search",component:EmployeeSearchComponent},
  {path:"upload",component:CsvUploadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
