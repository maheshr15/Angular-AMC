import { Component, Inject, Input, OnInit } from '@angular/core';
import {  FormBuilder,  FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


import { UserService } from './user.service';
import { User } from './users';




@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  gender: ['male','female'];
  userFormData: User;
  userData: FormGroup;
  courses: string[]= ['B.E', 'BCA', 'B.Sc'];
  
  constructor(private fb: FormBuilder, private userService: UserService, private route: Router) {}

  ngOnInit() {
    this.userData = this.fb.group ({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['male'],
      course: [''],
      

    });
  }

 postUserData(){
   
 }
 
  
  
  
  onSubmit(userData: NgForm){
    console.log(this.userData);
    this.userService.postUser(this.userData.value).subscribe(data => {
      console.log('POST USER : ', data);
    });
    this.route.navigateByUrl('userList');
  }

  
  


}




