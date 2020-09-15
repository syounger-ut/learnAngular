import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
  ValidatorFn,
  AbstractControl,
} from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      projectName: ['', [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidProjectName],
      mail: ['', [Validators.required, Validators.email]],
      projectStatus: ['critical'],
    })
  }

  onSubmit(): void {
    console.log(this.projectForm);
  }
}
