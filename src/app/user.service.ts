import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseurl="http://localhost:8080/api/v1/signup";
  private baseurlforSignIn="http://localhost:8080/api/v1/adminsignin";
  private baseurlforChangePassword="http://localhost:8080/api/v1/changepassword";
  constructor(private httpClient:HttpClient) { }

  createUser(user:User):Observable<object>{
    return this.httpClient.post(`${this.baseurl}`,user);
    
  }

  getUserList():Observable<User[]>
  {
return this.httpClient.get<User[]>(`${this.baseurl}`);
  }

  adminSignIn(username:string,password:string):Observable<User>
  {
return this.httpClient.get<User>(`${this.baseurlforSignIn}/${username}/${password}`);
  }

  changeAdminPassword(currentpassword:string,newpassword:string):Observable<Number>
  {
return this.httpClient.get<Number>(`${this.baseurlforChangePassword}/${currentpassword}/${newpassword}`);
  }


}
