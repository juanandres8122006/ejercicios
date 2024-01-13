// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  colores = ['red', 'green', 'blue', 'yellow', 'orange'];

  constructor() {}
}

