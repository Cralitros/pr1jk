import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menunavegacion',
  standalone: true,
  imports: [],
  templateUrl: './menunavegacion.component.html',
  styleUrl: './menunavegacion.component.css'
})
export class MenunavegacionComponent {
  isMenuOpen = false; // Controla si el menú está abierto
  mouseInsideMenu = false; // Controla si el mouse está dentro del menú

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen; // Alterna entre abrir y cerrar el menú
  }

  closeMenu() {
    // Solo cierra el menú si el mouse no está dentro
    if (!this.mouseInsideMenu) {
      this.isMenuOpen = false;
      this.mouseInsideMenu = false; 
    }
  }

  handleMouseLeave() {
    // Retarda el cierre para evitar falsos positivos al mover el mouse
    setTimeout(() => {
      this.closeMenu();
    }, 100);
  }

  keepMenuOpen() {
    this.mouseInsideMenu = true; // Activa el estado del mouse dentro
  }

  releaseMouse() {
    this.mouseInsideMenu = false; // Libera el estado al salir
  }

  handleContentClick(event: MouseEvent) {
    event.stopPropagation(); // Evita que los clics en el contenido bloqueen el cierre
  }

  pagina(){
    this.releaseMouse() ;
    this.closeMenu()  ;
  }
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  smoothScrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const targetPosition = element.offsetTop; // Posición del elemento
      const startPosition = window.scrollY; // Posición actual del scroll
      const distance = targetPosition - startPosition; // Distancia a recorrer
      const duration = 1500; // Duración del desplazamiento en milisegundos
      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = this.easeInOutQuad(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  }

  easeInOutQuad(t: number, b: number, c: number, d: number): number {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
}
