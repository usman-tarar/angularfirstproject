import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://localhost:7177/api/Stdents';
  constructor(private http: HttpClient) { }

  getalluser(){
    return this.http.get(this.apiUrl)
   }
}
