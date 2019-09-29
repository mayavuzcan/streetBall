import { Component, OnInit } from '@angular/core';
import { Player} from 'src/app/models/player/player.component';
import { CreatPlayerService } from 'src/app/services/CreatPlayer/CreatPlayer.service';
import { Router } from '@angular/router';
import { PlayerService } from 'src/app/services/Player/player.service';
@Component({
  selector: 'app-newUpdateplayer',
  templateUrl: './newUpdateplayer.component.html',
  styleUrls: ['./newUpdateplayer.component.css']
})
export class NewUpdateplayerComponent implements OnInit {
selectedPlayer:Player= new Player();
  constructor(private playerService: PlayerService,private router:Router) { }

  ngOnInit() {
  }
  getPatient() {
    this.selectedPlayer = this.playerService.getSelectedPlayer();
    console.log(this.selectedPlayer);
  }
}
