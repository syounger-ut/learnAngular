import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('loginForm', { static: true }) public form: NgForm;
  public subscriptions: string[] = ["Basic", "Advanced", "Pro"];
  public selectedSubscription: string = "Advanced";

  onSubmit(): void {
    console.log(this.form.value);
  }
}
