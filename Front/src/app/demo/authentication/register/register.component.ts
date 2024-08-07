// angular import
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
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
  password:string = "";

  constructor(
    private authService: AuthService,
    private router: Router,
  ){

  }

  register(){
    if (!this.name || !this.surname || !this.email ! || !this.password) {
      console.log("Ingrese todos los campos")
      return;
    }
    let data = {
      name: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password,
    }
    this.authService.register(data).subscribe((resp:any) => {
      console.log(resp);
      console.log("usuario creado")
    })
  }
}
