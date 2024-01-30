import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://localhost:3000/api/login';

  addUser(body: any) {
    console.log(body);
    return this.http.post(`${this.baseUrl + '/addUser'}`, body);
  }

  getUser(body: any) {
    return this.http.get(`${this.baseUrl + '/loginUser'}`, body);
  }
}
