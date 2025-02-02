import { Component } from '@angular/core';
import { MenunavegacionComponent } from "../menunavegacion/menunavegacion.component";
import { PievistaprincipalComponent } from "../pievistaprincipal/pievistaprincipal.component";
import { ParticleAnimationComponent } from "../particle-animation/particle-animation.component";

@Component({
  selector: 'app-presentacion',
  standalone: true,
  imports: [MenunavegacionComponent, PievistaprincipalComponent, ParticleAnimationComponent],
  templateUrl: './presentacion.component.html',
  styleUrl: './presentacion.component.css'
})
export class PresentacionComponent {

}
