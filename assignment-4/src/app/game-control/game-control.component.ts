import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
})
export class GameControlComponent implements OnInit {
  public counter: number[];

  private interval: any;

  ngOnInit(): void {
    this.counter = [];
  }

  public startCounter(): void {
    this.interval = setInterval(this.assignCounter.bind(this), 1000);
  }

  public evenCounter(): number[] {
    return this.counter.filter(num => (num % 2) === 0);
  }

  public oddCounter(): number[] {
    return this.counter.filter(num => (num % 2) !== 0);
  }

  public stopCounter(): void {
    clearInterval(this.interval);
  }

  private assignCounter(): void {
    const count = this.counter.length;
    this.counter.push(count + 1);
  }
}
