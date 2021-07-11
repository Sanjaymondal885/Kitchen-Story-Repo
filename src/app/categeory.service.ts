import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import {Categeory} from './categeory'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CategeoryService {
  private baseurl="http://localhost:8080/api/v1/cat";
  constructor(private httpClient:HttpClient) { }

  getCategeoryList():Observable<Categeory[]>
  {
return this.httpClient.get<Categeory[]>(`${this.baseurl}`);
  }
}
