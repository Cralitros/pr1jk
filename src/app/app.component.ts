import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentacionComponent } from "./components/presentacion/presentacion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pr1jk';
}
