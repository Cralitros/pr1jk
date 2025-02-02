import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { MenunavegacionComponent } from "../menunavegacion/menunavegacion.component";
import { AnimacionComponent } from "../animacion/animacion.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ParticleAnimationComponent } from "../particle-animation/particle-animation.component";

@Component({
  selector: 'app-segundavista',
  standalone: true,
  imports: [MenunavegacionComponent, AnimacionComponent, CommonModule, ParticleAnimationComponent],
  templateUrl: './segundavista.component.html',
  styleUrl: './segundavista.component.css'
})
export class SegundavistaComponent {
  lista_mensajes:any[]=[
    "No tengo las Suficientes Herramientas para <b>DECIDIR</b>.",
    "No dispongo de tiempo suficiente y no puedo <b>DELEGAR</b>.",
    "Necesito incrementar mis <b>VENTAS</b>.",
    "Los <b>PROCESOS</b> en mi empresa no están definidos",
    "Vendo pero <b>NO VEO RESULTADOS</b> al final del mes",
    "Nos estamos quedando rezagados y no <b>INNOVAMOS</b>.",
    "Me siento aislado al tomar <b>DECISIONES</b>.",
    "Deseo contar con un <b>EQUIPO MÁS COMPROMETIDO</b>."
  ];
  itemSeleccionado = '';
  animations = ['animate__backInRight', 'animate__fadeOut'];
  isBrowser = signal(false);
  private intervaloContador: any;
  isAnimating = false; // Evita múltiples disparos de animación
  currentAnimation: any = {};
  contador: number = 0;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }
  ngOnInit() {
    this.itemSeleccionado = this.lista_mensajes[0];
    this.startAutoChange();
  }

  startAutoChange() {
    if (this.isBrowser()) {
      this.intervaloContador = setInterval(() => {
        this.triggerAnimation();
      }, 8000); // Cambia el mensaje cada 3 segundos
    }
  }
  triggerAnimation() {
    if (this.isAnimating) return; // Evita disparar una nueva animación si ya está en progreso
    this.isAnimating = true;

    // Asignar animación de salida
    this.startAnimation(this.animations[1]); // `animate__fadeOut`
  }
  startAnimation(animationClass: string) {
    this.currentAnimation = {
      'animate__animated': true,
      [animationClass]: true
    };
  }
  onAnimationEnd() {
    if (this.currentAnimation['animate__fadeOut']) {
      // Si acaba la animación de salida, cambia el mensaje y asigna animación de entrada
      this.contador = (this.contador + 1) % this.lista_mensajes.length;
      this.itemSeleccionado = this.lista_mensajes[this.contador];
      this.startAnimation(this.animations[0]); // `animate__backInRight`
    } else if (this.currentAnimation['animate__backInRight']) {
      // Finaliza la animación de entrada
      this.isAnimating = false; // Permitir una nueva interacción
    }
  }

}
