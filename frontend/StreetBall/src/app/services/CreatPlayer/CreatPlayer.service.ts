import { Injectable } from '@angular/core';
import { Player } from 'src/app/models/player/player.component';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CreatPlayerService {

  selectedPlayer: Player;

constructor(private http: HttpClient) { }
savePlayer(player){
  return this.http.post('http://localhost:8080/creatPlayer', player).pipe();
}

}
