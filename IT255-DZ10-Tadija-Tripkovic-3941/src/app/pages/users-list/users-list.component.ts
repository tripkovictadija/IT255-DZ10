import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/module/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {

  title = 'IT255-DZ10';
  lnth = 9
  i = 0;
  public userForm: FormGroup;
  public users: User[] = [];
  
  constructor(private _userService: UserService) { 
    this._userService.getUsers().subscribe((data: any) => {
      
      for (this.i; this.i < this.lnth; this.i++) {
        this.users.push(new User(data[this.i].id, data[this.i].name, data[this.i].username, data[this.i].email, data[this.i].website));
      }
    })
    this.initForm();
  }

  public initForm() {
    this.userForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      PostId: new FormControl(1, [
        Validators.required
      ]),
      body: new FormControl('', [
        Validators.required
      ])
    });
  }

}
