import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { switchMap } from 'rxjs';

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
    email: ''
  };

  constructor(
    private userService: UserService,
    private route: Router,
    private router:ActivatedRoute,
  ){
    
  }

  ngOnInit(): void {
    this.loadUser();
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
      email: this.user.email
    };
    this.userService.updateUser(userId, userData).subscribe({
      next: response => {
        alert('Usuario editado corretamente');
        this.route.navigate(['/user']); 
      },
      error: err => alert('Error al actualizar el usuario')
    });
  }
  
}
