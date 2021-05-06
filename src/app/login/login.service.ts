
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json; charset=utf-8'
    })
  };



  loginApiURL: string = environment.authUrl;

  constructor(private httpClient: HttpClient) { }

  login(data: any): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(this.loginApiURL, data, this.httpOptions);
  }


}
