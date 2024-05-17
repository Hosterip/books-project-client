import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import NavbarComponent from "./routes/navbar";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NavbarComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aspnet-client';
}
