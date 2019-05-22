import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/Player/player.service';
import { Player } from 'src/app/models/player/player.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatPlayerService } from 'src/app/services/CreatPlayer/CreatPlayer.service';

@Component({
  selector: 'app-PlayerUpdate',
  templateUrl: './PlayerUpdate.component.html',
  styleUrls: ['./PlayerUpdate.component.css']
})
export class PlayerUpdateComponent implements OnInit {
  players:Player[];
  currentUser=localStorage.getItem("currentUser");
  constructor(private playerService:PlayerService,private router:Router,private creatPlayerService:CreatPlayerService) { }

  ngOnInit() {
    this.getPlayer();
  }
  getPlayer(){ 
    this.players=JSON.parse(
      localStorage.getItem("currentUser")
      );
  //LocalStorage de bulunan kullanici verilerini get etme isleminde kullaniliyor
     console.log(this.players);
  }
  savePlayer(form: NgForm){
    console.log(form);
    this.creatPlayerService.savePlayer(form).subscribe(
    resp => {
      localStorage.removeItem('currentUser');

      this.router.navigate(['profil']); 
      }
    );
  }
}
