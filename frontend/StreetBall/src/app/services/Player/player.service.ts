import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from 'src/app/models/player/player.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  selectedPlayer: Player;
  currentUser:Player=new Player();

  private playerUrl = 'http://localhost:8080/player';
constructor(private http: HttpClient) { }
getPlayer(): Observable<Player[]>{
  return this.http.get<Player[]>(this.playerUrl).pipe();
}


setSelectedPlayer(player: Player){
  this.selectedPlayer = player;
}

getSelectedPlayer() {
  
  return this.selectedPlayer;
}
savePlayer(player){
  return this.http.post('http://localhost:8080/updatePlayer', player).pipe();
}
}
