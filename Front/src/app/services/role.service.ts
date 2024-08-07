import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})

export class RoleService {
  private apiUrl= URL_SERVICIOS+"/roles";

  constructor(private http: HttpClient) { }

  createRole(roleData: any): Observable<any> {
    // Obtén el token de almacenamiento local o de un servicio de autenticación
    const token = localStorage.getItem('authToken'); // O usa un servicio para obtener el token
    
    let headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
console.log(roleData);
    return this.http.post(this.apiUrl, roleData, { headers });
  }
}