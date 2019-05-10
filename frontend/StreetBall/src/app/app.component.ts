import { Component } from '@angular/core';
import { Router } from '../../node_modules/@angular/router';
import { LoginService } from './services/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private loginService: LoginService) {}


  
  ngOnInit() {
  }


  clickLogin() {
    this.router.navigate(['login']);
  }
  clickLogout() {
   localStorage.removeItem('currentUser');
   this.router.navigate(['']); 
  }
}
