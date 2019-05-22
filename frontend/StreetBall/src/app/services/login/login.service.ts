import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

public token: string;
constructor(private http:HttpClient) { }


//service Login fonksiyonunun başladığı yer
login(player){

  return this.http.post<any>('http://localhost:8080/login',player).pipe(

  map(player=>{
    return player;
  }));

}
//service Login Fonksiyonunun bittiği yer


//service loggedIn fonksiyonunun başladığı yer
loggedIn() {

  return localStorage.getItem('currentUser');
}
//service loggedIn fonksiyonunun bittiği yer

}
