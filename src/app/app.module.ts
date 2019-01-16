import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing';
import { AppComponent } from './app.component';
import { ManagePlayersComponent } from './manage-players/manage-players.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { Game3Component } from './game3/game3.component';
import { PlayerStatusComponent } from './player-status/player-status.component';
import { ShowPlayerComponent } from './show-player/show-player.component';
import { PlayerService } from './player.service';


@NgModule({
  declarations: [
    AppComponent,
    ManagePlayersComponent,
    PlayerListComponent,
    AddPlayerComponent,
    Game1Component,
    Game2Component,
    Game3Component,
    PlayerStatusComponent,
    ShowPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
