import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatComunityService } from '../services/creatComunity.service';
@Component({
  selector: 'app-comunity',
  templateUrl: './comunity.component.html',
  styleUrls: ['./comunity.component.css']
})
export class ComunityComponent implements OnInit {

  constructor(private comunityService: CreatComunityService,private router:Router) { }

  ngOnInit() {
  }

  saveComunity(form: NgForm){
    console.log(form);
    this.comunityService.saveComunity(form).subscribe(
    resp => {
      console.log(resp);
            this.router.navigate(['login']);
      }
    );
  }
}
