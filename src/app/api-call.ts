import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ApiCall {

  constructor( private http: HttpClient) {}

  get(): Observable<Object> {
    const url = `${environment.baseUrl}`;
    return this.http.get<Object>(url);
  }

}