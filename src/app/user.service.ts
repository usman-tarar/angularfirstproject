import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  name: string;
  email: string;
  age: number;
  
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;
   apiUrl = 'https://localhost:7288/api/Stdents'; 

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }


  getDataById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  postData(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }
  updateUser(userId: number, userData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${userId}`, userData);
}
DeleteUser(userId: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${userId}`);
}
}
