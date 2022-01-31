import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleUserComponent } from './pages/single-user/single-user.component';
import { UsersListComponent } from './pages/users-list/users-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: SingleUserComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
