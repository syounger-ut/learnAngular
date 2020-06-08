import { Component } from '@angular/core';

@Component({
  selector: 'app-warning',
  templateUrl: './warning.component.html',
  styles: [`
    h2 {
      background: orange;
      color: green;
    }
  `]
})
export class WarningComponent {
  public message: String;
}
