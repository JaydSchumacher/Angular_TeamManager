import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['./game2.component.css']
})
export class Game2Component implements OnInit {
  playerList = [];
  
    constructor(private _PlayerService: PlayerService, private router: Router) { }
  
    ngOnInit() {
      this.refresh();
    }

    playing(id){
      this._PlayerService.update(id, "game2", "Playing");
      this.refresh();
      this.router.navigate(['./']);
    }
    notplaying(id){
      this._PlayerService.update(id, "game2", "Not Playing");
      this.refresh();
      this.router.navigate(['./']);
    }
    undecided(id){
      this._PlayerService.update(id, "game2", "Undecided");
      this.refresh();
      this.router.navigate(['./']);
    }
    refresh(){
      this._PlayerService.retrieveAll(callback => {
        this.playerList = callback;
      })
    }
}
