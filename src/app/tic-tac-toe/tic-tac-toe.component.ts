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
