import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users: any;
  constructor(private _http: HttpClient) { }
  apiUrl = 'http://localhost:8000/user';

  //Get all data
  getAllData():Observable<any>{
    return this._http.get(`${this.apiUrl}`);
  }

}
