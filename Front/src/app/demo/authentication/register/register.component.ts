// angular import
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {
  // public method
  SignUpOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];

  name:string = "";
  surname:string ="";
  email:string = "";
  role_id:number;
  password:string = "";
  roles: any[] =[];

  constructor(
    private authService: AuthService,
    private router: Router,
  ){

  }

  ngOnInit(){
    this.getRoleId();
  }

  register(){
    if (!this.name || !this.surname || !this.email ! || !this.password || !this.role_id) {
      alert('Ingrese todos los campos');
      return;
    }
    let data = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
      role_id: this.role_id,
    }
    this.authService.register(data).subscribe((resp:any) => {
      console.log(resp);
      alert('Usuario registrado correctamente');
      this.router.navigate(['/user']);
    })
  }

  getRoleId(){
    this.authService.getRoleId().subscribe((data:any) => {
      this.roles = data;
    }, error => {
      console.error('Error al traer los roles', error)
    })
  }
}
