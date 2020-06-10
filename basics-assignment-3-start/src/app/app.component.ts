import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public buttonActive: boolean;
  public clickEvents: number[];
  private date: Date;
  private counter: number;

  constructor() {
    this.clickEvents = [];
    this.counter = 0;
  }

  public toggleButton(): void {
    this.buttonActive = !this.buttonActive;
    const time = new Date().getTime();
    this.clickEvents.push(time);
    this.counter++;
  }

  public isFifthItem(timeStamp: number): boolean {
    return this.clickEvents.indexOf(timeStamp) > 3;
  }
}
