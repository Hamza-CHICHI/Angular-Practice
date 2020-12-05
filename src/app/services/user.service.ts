import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iuser } from '../models/iuser';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _url: string = 'http://localhost:5000/users';

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Iuser[]>(this._url);
  }
}
