import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:9191/assurance/pgarantie';

  constructor(private http: HttpClient) { }

  getEmployee(idG: string): Observable<any> {
    return this.http.get(this.baseUrl + "/GetOne/" + idG);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/Add`, employee);
  }

  updateEmployee(idG: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/Update/${idG}`, value);
  }

  deleteEmployee(idG: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/Delete/${idG}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetAll`);
  }
}
