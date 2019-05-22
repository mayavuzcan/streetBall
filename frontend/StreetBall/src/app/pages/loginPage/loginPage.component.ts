import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { PlayerService } from 'src/app/services/Player/player.service';


@Component({
  selector: 'app-loginPage',
  templateUrl: './loginPage.component.html',
  styleUrls: ['./loginPage.component.css']
})
export class LoginPageComponent implements OnInit {
  constructor(private router:Router,private loginService:LoginService,private playerService:PlayerService) { }
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
