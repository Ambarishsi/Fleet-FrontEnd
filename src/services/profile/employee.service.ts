import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {


  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json; charset=utf-8'
    })
  };


  employeeBaseUrl: string = environment.employeeURL;

  constructor(private httpClient: HttpClient) { }

  findById(data: any): Observable<HttpResponse<any>> {
    return this.httpClient.get<any>(this.employeeBaseUrl+'/find/'+data, this.httpOptions);
  }
}
