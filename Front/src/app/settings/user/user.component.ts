import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { UserService } from 'src/app/services/user.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  users: any = [];

  constructor(public userService: UserService,
              public router: Router,
  ){

  }

  ngOnInit(): void {
    this.getUser();
  }

  editUser(userId:number):void{
    this.router.navigate(['user-edit', userId]);
  }

  deleteUser(userId:number){
    this.router.navigate(['user-delete', userId])
  }

  getUser() {
    this.userService.getUser().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error', error);
      }
    );
  }

}
