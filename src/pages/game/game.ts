import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Game } from '../../providers/index';

const GAME_STATE_OPTIONS = 'OPTIONS';
const GAME_STATE_GAMEPLAY = 'GAMEPLAY';
const GAME_STATE_RESULTS = 'RESULTS';

@Component({
  selector: 'game-page',
  templateUrl: 'game.html'
})
export class GamePage {
  currentState: string;

  constructor(public navCtrl: NavController, public gameCtrl: Game) {
    this.currentState = GAME_STATE_OPTIONS;
  }

  changeState(state: string) {
    this.currentState = state;
  }

  startGame(started: boolean) {
    this.currentState = GAME_STATE_GAMEPLAY;
  }

  finishGame(finished: boolean) {
    this.currentState = GAME_STATE_RESULTS;
  }

  endResults(response: string) {
    if(response === 'AGAIN') {
      this.gameCtrl.restartGame();
      this.currentState = GAME_STATE_OPTIONS;
    }
    else {
      // Go Home
      this.openPage('home');
    }
  }

  openPage(page: string) {
    switch(page) {
      case 'home':
        this.navCtrl.setRoot(HomePage);
        break;
    }
  }
}
