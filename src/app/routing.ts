import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { ShowPlayerComponent } from './show-player/show-player.component';

const routes: Routes = [
    {path: 'managePlayer', component: ManagePlayersComponent, children: [
      {path: 'playerList', component: PlayerListComponent},
      {path: 'addPlayer', component: AddPlayerComponent},
      {path: 'show/:id', component: ShowPlayerComponent},
      //{path: '**', redirectTo: 'playerList'}
    ] },
    {path: 'playerStatus', component: PlayerStatusComponent, children: [
      {path: 'game1', component: Game1Component},
      {path: 'game2', component: Game2Component},
      {path: 'game3', component: Game3Component}
    ]},
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
