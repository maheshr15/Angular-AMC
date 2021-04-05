import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {  tap} from 'rxjs/operators';

import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  User=[];
 

  private _newData = new Subject<void>();
 
  constructor(private http: HttpClient) { }
  get newData(){
    return this._newData;
  }

  getAllUser() : Observable<User[]>{
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  getUserById(id: number): Observable<User>{
    return this.http.get<User>('http://localhost:3000/users/'+ id);
  }

  postUser(user : User) : Observable<User>{
    return this.http.post<User>('http://localhost:3000/users',  user)
    .pipe(
      tap(()=>{ this._newData.next()})
    );
  }

  editUser(user:User):Observable<User>{
    return this.http.put<User>('http://localhost:3000/users/' + user.id, user)
    .pipe(
      tap(()=>{ this._newData.next()})
    );
  }

  deleteUserData(id:number): Observable<User[]>
  {
    return this.http.delete<User[]>('http://localhost:3000/users/' + id);
  }

}
