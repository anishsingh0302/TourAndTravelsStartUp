import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationTabsComponent } from "./navigation-tabs/navigation-tabs/navigation-tabs.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationTabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SapnoKiSairUI';
}
