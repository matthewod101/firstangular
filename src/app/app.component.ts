import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shows to Watch and Games to Play';

  doIt(): void {
    this.title = this.title.toUpperCase();
  }
}
