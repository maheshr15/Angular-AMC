import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditUserComponent } from './edit/edit-user/edit-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path: '', redirectTo:'user', pathMatch:'full'},
  {path: 'user' , component: UserComponent},
  {path: 'edit/:id', component: EditUserComponent},
  {path: 'userList', component: UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
