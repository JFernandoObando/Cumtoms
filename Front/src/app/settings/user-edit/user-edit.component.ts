import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';
import { AuthService } from 'src/app/demo/authentication/service/auth.service';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-edit.component.html',
  styleUrl: './user-edit.component.scss'
})


export class UserEditComponent {
  user: any = {
    name: '',
    surname: '',
    email: '',
    role_id:null,
  };
  roles: any[] = [];
  role_id:null;

  constructor(
    private userService: UserService,
    private route: Router,
    private authService: AuthService,
    private router:ActivatedRoute,
  ){
    
  }

  ngOnInit(): void {
    this.loadUser();
    this.getRoleId();
  }

  loadUser(): void {
    this.router.paramMap.pipe(
      switchMap(params => {
        const id = +params.get('id')!;
        return this.userService.getUserID(id);
      })
    ).subscribe({
      next: user => {
        this.user = user;
      },
      error: err => console.error('Error fetching user', err)
    });
  }

  editUser(): void {
    const userId = this.user.id;
    const userData = {
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email,
      role_id: this.user.role_id, 
    };
    this.userService.updateUser(userId, userData).subscribe({
      next: response => {
        alert('Usuario editado correctamente');
        this.route.navigate(['/user']); 
      },
      error: err => alert('Error al actualizar el usuario')
    });
  }
  
  getRoleId(){
    this.authService.getRoleId().subscribe((data:any) => {
      this.roles = data;
    }, error => {
      console.error('Error al traer los roles', error)
    })
  }
  
}
