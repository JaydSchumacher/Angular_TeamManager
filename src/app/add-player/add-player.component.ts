import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  player: Player; 

  constructor(private _PlayerService:PlayerService, private router: Router) { }

  ngOnInit() {
    this.player = new Player();
  }

  submit(){
    this._PlayerService.create(this.player);
    // this.router.navigate(['/', 'managePlayer']);
  }

}
