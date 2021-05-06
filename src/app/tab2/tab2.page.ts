import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  testdata: any;

  httpOptions = {
    headers: new HttpHeaders({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      'Content-Type': 'application/json; charset=utf-8'
    })
  };

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
   this.test().subscribe(data => {
    console.log('aasasasas',data);
    this.testdata = data;
   }
   );


  }


  test(): Observable<HttpResponse<any>> {
    return this.testdata = this.httpClient.get<any>('https://jsonplaceholder.typicode.com/todos/1', this.httpOptions);
  }

}
