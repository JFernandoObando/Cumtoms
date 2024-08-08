import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( public http: HttpClient,
               public router: Router,
  ) { }

  getUser(){
    let URL= URL_SERVICIOS+"/users";
    return this.http.get(URL);
  }
  
  getUserID(id:any){ 
    return  this.http.get(URL_SERVICIOS+"/users/" + id);   
  }

  updateUser(id: number, userData: any): any {
    return this.http.put(URL_SERVICIOS + "/users/" + id, userData);
  }

  deleteUser(id: number): any {
    return this.http.delete(URL_SERVICIOS + "/users/" + id);
  }
}
