import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from './shared/tic-tac-toe.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.css']
})
export class TicTacToeComponent implements OnInit {

  constructor(private ticTacToeService: TicTacToeService) { }

  ngOnInit(): void {
    this.ticTacToeService.init();
  }

  initGame(): void {
    this.ticTacToeService.initGame();
  }

  newGame(): void {
    this.ticTacToeService.newGame();
  }

  play(posX: number, posY: number): void {
    this.ticTacToeService.play(posX, posY);
  }

  showX(posX: number, posY: number): boolean  {
    return this.ticTacToeService.showX(posX, posY);
  }

  showO(posX: number, posY: number): boolean  {
    return this.ticTacToeService.showO(posX, posY);
  }

  showVictory(posX: number, posY: number): boolean  {
    return this.ticTacToeService.showVictory(posX, posY);
  }

  get player(): number {
    return this.ticTacToeService.player;

  }

  get showStart(): boolean {
    return this.ticTacToeService.showStart;
  }

  get showBoard(): boolean {
    return this.ticTacToeService.showBoard;
  }

  get showEnd(): boolean {
    return this.ticTacToeService.showEnd;
  }

}
