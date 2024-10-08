import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'http://localhost:3000/send-email'; // Update this with your actual API URL

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string): Observable<any> {
    return this.http.post(this.apiUrl, { name, email, message });
  }
}