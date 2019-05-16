import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router:Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  goSolo(){
    this.router.navigate(['soloPlay']); 
  }
  clickGoProfil(){
    this.router.navigate(['profil']); 
  }
  clickLogout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['']); 
   }
}
