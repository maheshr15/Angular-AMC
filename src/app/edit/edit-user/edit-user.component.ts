import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { User } from 'src/app/user/users';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  userData: FormGroup;
  user: User;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute,
    private fb: FormBuilder, private route: Router) {
    let id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.getUserById(id);
  }



  getUserById(id: number) {

    this.userService.getUserById(id).subscribe(user => {

      this.formUserGroup(user);
    })
  }


  ngOnInit() {
    this.userData = this.fb.group({
      name: [''],
      email: [''],
      gender: ['male'],
      course: ['']
    });

  }

  onSubmit(userData: NgForm) {

    this.userService.editUser(this.userData.value).subscribe(data => {

    });
    this.route.navigateByUrl('userList');
  }


  formUserGroup(user: User) {
    let group = {}
    let keys = Object.keys(user);

    keys.forEach(key => {
      let value = user[key];
      group[key] = new FormControl(value);
    });
    console.log('GROUP ', group);
    this.userData = this.fb.group(group);
  }


}
