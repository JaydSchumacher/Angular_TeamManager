import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  playerList = [];

  constructor(private _PlayerService: PlayerService) { }

  ngOnInit() {
    this._PlayerService.retrieveAll(callback => {
      this.playerList = callback;
    })
  }
  destroy(id){
    console.log(id)
    this._PlayerService.destroy(id);
    this._PlayerService.retrieveAll(callback => {
      this.playerList = callback;
    })
  }

}
