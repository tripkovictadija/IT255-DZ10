import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/module/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  lnth = 9;
  i = 0;

  public user: User;
  constructor(private _route: ActivatedRoute, private _userService: UserService) {

  }

  ngOnInit() {

    this._route.params.subscribe(params => {
      let id = params['id']
      this.getPost(id);
    })
  }
  public getPost(id: string) {
    this._userService.getUsers().subscribe(((data: any) => {
      for (this.i; this.i < this.lnth; this.i++) {
        if (id == data[this.i].id) {
          this.user = new User(data[this.i].id, data[this.i].name, data[this.i].username, data[this.i].email, data[this.i].website);
      
        }
      }

    }))
  }
}
