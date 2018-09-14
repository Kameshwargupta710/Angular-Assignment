import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/Http';
import { DataStruct } from './DataStruct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public _url='../assets/booklist.json';

  constructor(private http:HttpClient) { }

  getData():Observable<DataStruct[]>{
    return this.http.get<DataStruct[]>(this._url);
  }
}