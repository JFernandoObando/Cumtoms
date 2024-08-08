import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-delete',
  template: '', // Elimina el botón de eliminar
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class UserDeleteComponent implements OnInit {
  userId: number;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id');
    this.deleteUser();
  }

  deleteUser(): void {
    this.userService.deleteUser(this.userId).subscribe(() => {
      alert('Usuario eliminado correctamente')
      this.router.navigate(['/user']);
    });
  }
}