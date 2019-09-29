import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/Player/player.service';
import { Player } from 'src/app/models/player/player.component';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatPlayerService } from 'src/app/services/CreatPlayer/CreatPlayer.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'app-PlayerUpdate',
  templateUrl: './PlayerUpdate.component.html',
  styleUrls: ['./PlayerUpdate.component.css']
})
export class PlayerUpdateComponent implements OnInit {
  player1: Player;
  players: Player[];
  currentUser = localStorage.getItem('currentUser');
  constructor(
    private playerService: PlayerService,
    private router: Router,
    private creatPlayerService: CreatPlayerService
  ) {}

  ngOnInit() {
    this.getPlayer();
  }
  getPlayer() {
    this.players = JSON.parse(localStorage.getItem('currentUser'));

    console.log(this.players);
  }
  savePlayer(form: NgForm) {
    this.player1 = JSON.parse(JSON.stringify(form));
    this.player1.id = JSON.parse(localStorage.getItem('currentUser')).id;
    console.log(this.player1);
    this.creatPlayerService.savePlayer(this.player1).subscribe(resp => {
      localStorage.removeItem('currentUser');

      this.router.navigate(['profil']);
    });
  }
}
