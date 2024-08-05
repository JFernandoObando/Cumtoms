// angular import
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  // public method
  SignInOptions = [
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

  email:string = '';
  password:string = '';
  constructor(
   
    private authService: AuthService,
    public router: Router,
    ) {
     
  }

  login(){
    if(!this.email || !this.password){
      // this.toastr.error("Validacion","Necesitas ingresar todos los campos");
      console.log("llenar los campos")
      return;
    }
    this.authService.login(this.email,this.password).subscribe((resp:any) => {
      console.log(resp);
      if(resp.error && resp.error.error == 'Unauthorized'){
        // this.toastr.error("Validacion",'Las credenciales son incorrectas');
        console.log("incorrecto")
        return;
      }
      if(resp == true){
        console.log("welcome")
        
        setTimeout(() => {
          this.router.navigateByUrl("/dashboard/default");
        }, 500);
      }
    },(error) => {
      console.log(error);
    })
  }

  
}
