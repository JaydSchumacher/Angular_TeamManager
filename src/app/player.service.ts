import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class PlayerService {

  constructor(private _http: Http) { }

  create(player) {
    return this._http.post('/create', player).subscribe(
      (response)=> {
        console.log('successful rsponse from server')
      },
      (err) => {
        console.log(err);
      }
    )
  }

  retrieveAll(callback){
    this._http.get('/all').subscribe(
      (players)=> {
        console.log('successful rsponse from server')
        console.log(players.json());
        callback(players.json());
      },
      (err) => {
        console.log(err);
      }
    );
  }

  destroy(id){
    this._http.get("/delete/"+ id).subscribe(
      (response)=> {
        console.log('successful rsponse from server')
      },
      (err) => {
        console.log(err);
      }
    )
  }
  update(id, game, status){
    this._http.get("/update/"+ id+'/'+game+'/'+status).subscribe(
      (response)=> {
        console.log('successful rsponse from server')
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
