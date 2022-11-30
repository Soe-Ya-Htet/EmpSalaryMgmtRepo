import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  public getEmployees(minSalary, maxSalary, offset, limit, sort): Observable<Employee> {

    const url = 'http://localhost:8081/employee/users';

    let queryParams = new HttpParams().append("minSalary", minSalary).append("maxSalary", maxSalary).append("offset", offset)
                                      .append("limit", limit).append("sort", sort);
    return this.http.get<Employee>(url, {params: queryParams})
  }

}
