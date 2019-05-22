import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/Player/player.service';
import { Player } from 'src/app/models/player/player.component';
import { getPlayers } from '@angular/core/src/render3/players';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  players:Player[];
  currentUser=localStorage.getItem("currentUser");
  constructor(private playerService:PlayerService,private router:Router,) { }

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
  updateLink(player){
    this.playerService.setSelectedPlayer(player);
    this.router.navigate(['updatePlayer']);   }
  
}
