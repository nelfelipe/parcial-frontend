import { Component, signal } from '@angular/core';
import { Menu } from './Components/menu/menu';

@Component({
  imports: [Menu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('parcial');
}