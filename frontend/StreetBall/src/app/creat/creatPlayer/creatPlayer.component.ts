import { Component, OnInit } from '@angular/core';
import { CreatPlayerService } from 'src/app/services/CreatPlayer/CreatPlayer.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-creatPlayer',
  templateUrl: './creatPlayer.component.html',
  styleUrls: ['./creatPlayer.component.css']
})
export class CreatPlayerComponent implements OnInit {

  constructor(private playerService: CreatPlayerService, private router:Router) { }

  ngOnInit() {
  }

  loginLink(){

    this.router.navigate(['login']);


  }

  savePlayer(form: NgForm){
    console.log(form);
    this.playerService.savePlayer(form).subscribe(
    resp => {
      console.log(resp);
            this.router.navigate(['login']);
      }
    );
  }

}
