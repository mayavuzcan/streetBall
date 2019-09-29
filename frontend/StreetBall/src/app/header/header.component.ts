import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private loginService:LoginService) { }

  ngOnInit() {
  }

  clickLogin() {
    this.router.navigate(['login']);
  }
  clickLogout() {
   localStorage.removeItem('currentUser');
   this.router.navigate(['']); 
  }
  clickCreat(){
    this.router.navigate(['creatPlayer']);

  }
  clickGoIletisim(){
    this.router.navigate(['comunityPage']);

  }

}
