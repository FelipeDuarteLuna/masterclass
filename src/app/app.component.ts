import { Component } from '@angular/core';
import { PostFormComponent } from './post-form/post-form.component';

@Component({
  selector: 'app-root',
  imports: [PostFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'masterclass';
}
