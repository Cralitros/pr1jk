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
}
