import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl: string = "http://localhost:8081/employee";

  constructor(private http:HttpClient) { }

  getEmployees(minSalary, maxSalary, offset, limit, sort): Observable<Employee> {

    const url = `${this.baseUrl}/users`;

    let queryParams = new HttpParams().append("minSalary", minSalary).append("maxSalary", maxSalary).append("offset", offset)
                                      .append("limit", limit).append("sort", sort);
    return this.http.get<Employee>(url, {params: queryParams})
  }

  upload(formData: FormData): Observable<any> {
    const url = `${this.baseUrl}/upload`;

    return this.http.post(url, formData, {responseType:'text', observe: 'response'});
  }

}
