import { Component } from '@angular/core';
import { UserService } from '../Services/User/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.css'
})
export class ListUserComponent {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }
  calculate(): void {
    const count = this.userService.fetchNbInList(this.users, 'accountCategory', 'Customer');
    console.log('Nombre de clients :', count);
  }
  
}
