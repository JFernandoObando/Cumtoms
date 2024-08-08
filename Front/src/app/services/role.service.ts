import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private apiUrl = URL_SERVICIOS + '/roles';

  constructor(
    public http: HttpClient,
    public router: Router
  ) {}

  createRole(roleData: any): Observable<any> {
    // Obtén el token de almacenamiento local o de un servicio de autenticación
    const token = localStorage.getItem('authToken'); // O usa un servicio para obtener el token

    let headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post(this.apiUrl, roleData, { headers });
  }
  // Obtener todos los roles
  getRoles(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Obtener un rol por ID
  getRoleById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Actualizar un rol
  updateRole(id: number, roleData: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, roleData);
  }

  // Eliminar un rol
  deleteRole(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}