import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {
  @ViewChild('child') child;

  constructor() { }

  ngOnInit() {
  }

}
