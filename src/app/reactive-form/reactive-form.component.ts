import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  public firstName: FormControl = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    console.log(this.firstName)
  }

}
