import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private readonly TAM_TAB: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: any;
  private countMoves: number;
  private win: any;

  private _player: number;
  private _showStart: boolean;
  private _showBoard: boolean;
  private _showEnd: boolean;

  constructor() { }

  initGame(): void {
    this._showStart = true;
    this._showBoard = false;
    this._showEnd = false;
    this.countMoves = 0;
    this._player = this.X;
    this.win = false;
    this.initBoard();
  }

  initBoard(): void {

  }
}
