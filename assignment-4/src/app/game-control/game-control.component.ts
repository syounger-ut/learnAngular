import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
})
export class GameControlComponent implements OnInit {
  public counter: number;

  private interval: NodeJS.Timeout;

  ngOnInit(): void {
    this.counter = 0;
  }

  public startCounter(): void {
    this.interval = setInterval(this.assignCounter.bind(this), 1000);
  }

  public stopCounter(): void {
    clearInterval(this.interval);
  }

  private assignCounter(): void {
    this.counter += 1;
  }

  public counterAsArray(): Array<number> {
    return Array(this.counter).fill(0).map((_x,i) => i);
  }
}
