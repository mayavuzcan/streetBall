import { Component, OnInit } from '@angular/core';
import { Player} from 'src/app/models/player/player.component';
import { CreatPlayerService } from 'src/app/services/CreatPlayer/CreatPlayer.service';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/Player/player.service';

@Component({
  selector: 'app-newPlayer',
  templateUrl: './newPlayer.component.html',
  styleUrls: ['./newPlayer.component.css']
})
export class NewPlayerComponent implements OnInit {

  players:Player[];
  playerss:Player[];
  


  constructor(private playerService: PlayerService,private router:Router) { }

  ngOnInit() {

    this.getPlayer();
    this.getsPlayer();


  }
  getPlayer(){
    this.playerService.getPlayer().subscribe(player => {
      this.players = (player);
      console.log(this.players); 
    });
  }
  getsPlayer() {
    this.playerss = JSON.parse(localStorage.getItem('currentUser'));

    console.log(this.playerss);
  }
  clickProfile(player) {
    this.playerService.setSelectedPlayer(player);
    this.router.navigate(['newPlayerUpdate']);
  }

}
