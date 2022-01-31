import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private _httpClient: HttpClient) { }

  public getUsers(): Observable<Object> {
    let url = 'https://jsonplaceholder.typicode.com/users'
    return this._httpClient.get(url).pipe(
      map((res) => {
        return res;
      }))
  }
}
