import { Component, Input } from "@angular/core";

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styles: [`
    li {
      background-color: blue;
    }
  `]
})
export class EvenComponent {
  @Input() count: number;
}
