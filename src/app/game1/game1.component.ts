import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  playerList = [];
  
    constructor(private _PlayerService: PlayerService) { }
  
    ngOnInit() {
      this._PlayerService.retrieveAll(callback => {
        this.playerList = callback;
      })
    }

    playing(id){
      this._PlayerService.update(id, "game1", "Playing")
    }
    notplaying(id){
      this._PlayerService.update(id, "game1", "Not Playing")
    }
    undecided(id){
      this._PlayerService.update(id, "game1", "Undecided")
    }
}
