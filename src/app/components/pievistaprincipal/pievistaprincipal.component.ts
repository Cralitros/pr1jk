import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from "@angular/common"; // update this
@Component({
  selector: 'app-pievistaprincipal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pievistaprincipal.component.html',
  styleUrl: './pievistaprincipal.component.css'
})
export class PievistaprincipalComponent {
  items = [
    'CONOCE COMO DARLE COMPETITIVIDAD A TU NEGOCIO.',
    'ORGANIZA TUS IDEAS.',
    'AUTOMATIZA TUS PROCESOS.',
    'GENERA Y GESTIONA TU CADENA DE VALOR.'
  ];
  
  private intervaloContador: any;
  itemSeleccionado = '';
  contador: number = 0;
  isBrowser = signal(false);
  
  animations = ['animate__backInRight', 'animate__fadeOut'];
  currentAnimation: any = {};
  isAnimating = false; // Evita múltiples disparos de animación

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser.set(isPlatformBrowser(platformId));
  }

  ngOnInit() {
    this.itemSeleccionado = this.items[0];
    this.startAutoChange();
  }

  ngOnDestroy() {
    if (this.intervaloContador) {
      clearInterval(this.intervaloContador);
    }
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

  onAnimationEnd() {
    if (this.currentAnimation['animate__fadeOut']) {
      // Si acaba la animación de salida, cambia el mensaje y asigna animación de entrada
      this.contador = (this.contador + 1) % this.items.length;
      this.itemSeleccionado = this.items[this.contador];
      this.startAnimation(this.animations[0]); // `animate__backInRight`
    } else if (this.currentAnimation['animate__backInRight']) {
      // Finaliza la animación de entrada
      this.isAnimating = false; // Permitir una nueva interacción
    }
  }

  startAnimation(animationClass: string) {
    this.currentAnimation = {
      'animate__animated': true,
      [animationClass]: true
    };
  }

  currentSlide(index: number) {
    this.itemSeleccionado = this.items[index];
    this.startAnimation(this.animations[0]); // Reinicia con la primera animación
  }
}
