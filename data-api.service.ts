import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataAPIService {
  baseURL = 'https://openlibrary.org/api/books';

  constructor(private _http: HttpClient) { }
  
  getData(){
    this._http.get(`${this.baseURL}&format=json`);
  }
}
