import { Component } from '@angular/core';
import { MenunavegacionComponent } from "../menunavegacion/menunavegacion.component";
import { AnimacionComponent } from "../animacion/animacion.component";

@Component({
  selector: 'app-segundavista',
  standalone: true,
  imports: [MenunavegacionComponent, AnimacionComponent],
  templateUrl: './segundavista.component.html',
  styleUrl: './segundavista.component.css'
})
export class SegundavistaComponent {

}
