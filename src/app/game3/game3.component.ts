import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {
  playerList = [];
  
    constructor(private _PlayerService: PlayerService) { }
  
    ngOnInit() {
      this._PlayerService.retrieveAll(callback => {
        this.playerList = callback;
      })
    }

    playing(id){
      this._PlayerService.update(id, "game3", "Playing")
    }
    notplaying(id){
      this._PlayerService.update(id, "game3", "Not Playing")
    }
    undecided(id){
      this._PlayerService.update(id, "game3", "Undecided")
    }
}
