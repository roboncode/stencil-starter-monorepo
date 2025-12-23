import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
