import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-form',
  imports: [ReactiveFormsModule],
  templateUrl: './post-form.component.html',
  styleUrl: './post-form.component.css'
})
export class PostFormComponent {

  submitForm = output<Post>(); //@Output() submitForm = new EventEmitter<Post>();

  form = new FormGroup({
    title: new FormControl('', {nonNullable: true}),
    body:  new FormControl('', {nonNullable: true}),
  });
}
