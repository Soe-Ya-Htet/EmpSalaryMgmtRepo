import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {

  employees:Employee;
  minSalary:number;
  maxSalary:number;
  offset:number;
  limit:number;
  sort:string;
  order:string;
  isError:boolean = false;

  constructor(private service: EmployeeService) { 
  }

  ngOnInit() {
    let resp = this.service.getEmployees(0, Number.MAX_VALUE, 0, 30, '+id');
    resp.subscribe(data => this.employees=data);
  }

  public searchEmpByCriteria(){
    if (this.minSalary == undefined || this.maxSalary == undefined || this.offset == undefined
        || this.limit == undefined || this.sort == undefined || this.order == undefined) {
      this.isError = true;
    } else if( isNaN(Number(this.minSalary)) || isNaN(Number(this.maxSalary)) || isNaN(Number(this.offset)) || isNaN(Number(this.limit))) {
      this.isError = true;
    }else {
      this.isError = false;
      let resp = this.service.getEmployees(this.minSalary, this.maxSalary, this.offset, this.limit, this.order+this.sort);
      resp.subscribe(data => this.employees=data);
      this.minSalary = undefined;
      this.maxSalary = undefined;
      this.offset = undefined;
      this.limit = undefined;
      this.sort = undefined;
      this.order = undefined;
    }
  }

}
