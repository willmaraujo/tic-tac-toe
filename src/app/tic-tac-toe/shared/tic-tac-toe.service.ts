import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TicTacToeService {

  private readonly TAB_SIZE: number = 3;
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

  init(): void {
    this._showStart = true;
    this._showBoard = false;
    this._showEnd = false;
    this.countMoves = 0;
    this._player = this.X;
    this.win = false;
    this.initBoard();
  }

  initBoard(): void {
    this.board = [this.TAB_SIZE];
    for (let i = 0; i < this.TAB_SIZE; i++) {
      this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }

  initGame(): void {
    this._showStart = false;
    this._showBoard = true;
  }

  play(posX: number, posY: number): void {

    //invalid turn
    if (this.board[posX][posY] !== this.EMPTY || this.win) {
      return;
    }

    this.board[posX][posY] = this._player;
    this.countMoves++;
    this.win = this.isEndGame(posX, posY, this.board, this._player);

    this._player = (this._player === this.X) ? this.O : this.X;

    if (!this.win && this.countMoves < 9) {
      this.cpuPlay();
    }

    if (this.win !== false) {
      this._showEnd = true;
    }

    if (!this.win && this.countMoves === 9) {
      this._player = 0;
      this._showEnd = true;
    }
  }

  /**
   * Chacks if the game is over
   * 
   * @param row 
   * @param column 
   * @param board 
   * @param player 
   * @return array
   */
  isEndGame(row: number, column: number, board: any, player: number): any {
    let end: any = false;

    if (board[row][0] === player &&
      board[row][1] === player &&
      board[row][2] === player) {
      end = [[row, 0], [row, 1], [row, 2]];
    }

    if (board[0][column] === player &&
      board[1][column] === player &&
      board[2][column] === player) {
      end = [[0, column], [1, column], [2, column]];
    }

    if (board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player) {
      end = [[0, 0], [1, 1], [2, 2]];
    }

    if (board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player) {
      end = [[0, 2], [1, 1], [2, 0]];
    }

    return end;
  }

  cpuPlay(): void {
    let turn: number[] = this.getTurn(this.O);

    if (turn.length <= 0) {
      turn = this.getTurn(this.X);
    }

    if (turn.length <= 0) {
      const turns: any = [];
      for (let i = 0; i < this.TAB_SIZE; i++) {
        for (let j = 0; j < this.TAB_SIZE; j++) {
          if (this.board[i][j] === this.EMPTY) {
            turns.push([i, j]);
          }
        }
      }
      let k = Math.floor(Math.random() * (turns.length - 1));
      turn = [turns[k][0], turns[k][1]];
    }

    this.board[turn[0]][turn[1]] = this._player;
    this.countMoves++;
    this.win = this.isEndGame(turn[0], turn[1], this.board, this._player);
    this._player = (this._player === this.X) ? this.O : this.X;

  }

  /**
   * Get a valid turn to victory of a player
   * 
   * @param player
   * 
   */
  getTurn(player: number): number[] {
    const board = this.board;
    for (let row = 0; row < this.TAB_SIZE; row++) {
      for (let col = 0; col < this.TAB_SIZE; col++) {
        if (board[row][col] !== this.EMPTY) {
          continue;
        }

        board[row][col] = player;
        if (this.isEndGame(row, col, board, player)) {
          return [row, col];
        }
        board[row][col] = this.EMPTY;
      }
    }
    return [];

  }

  /**
   * Returns if the X has to be shown to the coordinator informed
   * 
   * @param posX
   * @param posY 
   */
  showX(posX: number, posY: number): boolean {
    return this.board[posX][posY] === this.X;
  }

  /**
   * Returns if the O has to be shown to the coordinator informed
   * 
   * @param posX
   * @param posY 
   */
  showO(posX: number, posY: number): boolean {
    return this.board[posX][posY] === this.O;
  }

  /**
   * Check if win mark should be shown
   * 
   * @param posX 
   * @param posY 
   */
  showVictory(posX: number, posY: number): boolean {
    let showVictory: boolean = false;

    if (!this.win) {
      return showVictory;
    }

    for (let pos of this.win) {
      if (pos[0] === posX && pos[1] === posY) {
        showVictory = true;
        break;
      }
    }
    return showVictory;
  }

  /**
   * Starts a new game
   */
  newGame(): void {
    this.init();
    this._showEnd = false;
    this._showStart = false;
    this._showBoard = true;
  }

  get showStart(): boolean {
    return this._showStart;
  }

  get showBoard(): boolean {
    return this._showBoard;
  }

  get showEnd(): boolean {
    return this._showEnd;
  }

  get player(): number {
    return this._player;
  }

}
