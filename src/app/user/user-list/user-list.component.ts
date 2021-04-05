import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : User[];
  displayedColumns: string[] = [ 'name', 'email', 'gender', 'course','action'];
  
  constructor(private userService: UserService, private route: Router, private routes: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.userService.newData.subscribe(()=> {
      this.getUserData();
    })
    this.getUserData();
    
  }

  getUserData() {
      this.userService.getAllUser().subscribe(data => {
        this.users =  data;
        console.log(this.users);
      })
  }
  deleteUser(id:number) {
    this.userService.deleteUserData(id).subscribe(data => {
      this.getUserData();
    })
  }
  
  editUser(element){
    console.log('Element', element);
    this.route.navigate(['edit', element.id]);
    
  }

}
