import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './module/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IT255-DZ09';
  lnth = 9;
  i = 0;
  channel = 'UCM6beNtY_5gE3ngtDniCePA';

  public userForm: FormGroup;
  public users: User[] = [];
  constructor(private _userService: UserService) {
    this._userService.getUsers().subscribe((data: any) => {
      //console.log(data)
      for (this.i; this.i < this.lnth; this.i++) {
        this.users.push(new User(data[this.i].id, data[this.i].name, data[this.i].Username, data[this.i].email, data[this.i].website));
      }
    })
    this.initForm();
  }
  public initForm() {
    this.userForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      UserId: new FormControl(1, [
        Validators.required
      ]),
      body: new FormControl('', [
        Validators.required
      ])
    });
  }
}
