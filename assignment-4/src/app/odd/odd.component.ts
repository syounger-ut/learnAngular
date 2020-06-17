import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styles: [`
    li {
      background-color: green;
    }
  `]
})
export class OddComponent {
 @Input() count: number;
}
