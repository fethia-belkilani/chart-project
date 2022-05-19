import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Traffic } from './traffic';

@Injectable({
  providedIn: 'root'
})
export class TrafficDeathService {
  constructor(private httpClient: HttpClient) { }

  
      private url = 'https://dashboards.kfv.at/api/verkehrstote/json';


      getData(): Observable<Array<Traffic>>{
        //return this.httpClient.get(this.url);
        return this.httpClient.get<Array<Traffic>>(this.url); 

      }
}
