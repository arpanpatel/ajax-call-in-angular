import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {


  constructor(private userService: UserService) { }

  users: any;

  ngOnInit() {
    this.getUserList();
  }


  getUserList() {
     this.userService.getUsers().subscribe((users: any) => {
         console.log(users.results);
         this.users = users.results;
     });
  }

}
