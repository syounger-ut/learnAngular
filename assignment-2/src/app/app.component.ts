import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public username: string;
  public buttonDisabled: boolean = true;

  onTextChange(): void {
    if(this.username.length > 0) {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }

  onButtonClick(): void {
    this.username = "";
    this.onTextChange();
  }
}
