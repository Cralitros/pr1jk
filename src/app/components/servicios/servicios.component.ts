import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {


  touchStartX = 0;
  touchEndX = 0;
  currentItem: number = 0;
  
  selectedItem?: any | null = null;
  items = ['CAPACITACION', 'CONSULTORIA', 'ASESORIA', 'ACOMPAÑAMIENTO', 'NETWORKING'];
  contenido:any={
    "CAPACITACION": [
      '<div class="lista it1"><img src="./assets/grp1/fondo.png" alt=""><img class="flecha" src="./assets/grp1/flecha1.png" alt="" style="position: absolute;"></div>',
      '<div class="lista it3"><img src="./assets/grp1/fondo.png" alt=""></div>',
      '<div class="lista it4"><img src="./assets/grp1/fondo.png" alt=""></div>',
      '<div class="lista it5"><img src="./assets/grp1/fondo.png" alt=""></div>'
    ],
  }

 
  getTransform(index: number): string {
    const diff = index - this.currentItem;
    if (diff === 0) {
      return 'translateX(0) scale(1)';
    } else if (diff === 1 || (diff === -this.items.length + 1)) {
      return 'translateX(220px) scale(0.8)';
    } else if (diff === -1 || (diff === this.items.length - 1)) {
      return 'translateX(-220px) scale(0.8)';
    } else {
      return 'translateX(0) scale(0.5)';
    }
  }

  contenidoD() {
    // console.log(this.contenido[this.selectedItem]);
    this.selectedItem="CAPACITACION";
     return this.selectedItem ? this.contenido[this.selectedItem] : [];
   }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
  }

  onTouchMove(event: TouchEvent) {
    this.touchEndX = event.touches[0].clientX;
  }

  onTouchEnd(event: TouchEvent) {
    const deltaX = this.touchEndX - this.touchStartX;
  
    if (deltaX > 50) {
      // Deslizamiento hacia la derecha (prev)
      this.prev();
    } else if (deltaX < -50) {
      // Deslizamiento hacia la izquierda (next)
      this.next();
    }
  }
  prev() {
    this.currentItem = (this.currentItem === 0) ? this.contenido[this.selectedItem].length - 1 : this.currentItem - 1;
    console.log('Elemento enfocado:', this.getFocusedElementClass());
  }

  next() {
    this.currentItem = (this.currentItem === this.contenido[this.selectedItem].length - 1) ? 0 : this.currentItem + 1;
    console.log('Elemento enfocado:', this.getFocusedElementClass());
  }

  // Método para identificar el elemento enfocado
  getFocusedElementClass(): string {
    const items = this.contenidoD();
    if (items.length > 0 && this.currentItem >= 0 && this.currentItem < items.length) {
      // Extraer la clase del elemento enfocado
      const focusedElement = items[this.currentItem];
      if (focusedElement.includes('it1')) {
        return 'it1';
      } else if (focusedElement.includes('it3')) {
        return 'it3';
      } else if (focusedElement.includes('it4')) {
        return 'it4';
      } else if (focusedElement.includes('it5')) {
        return 'it5';
      }
    }
    return ''; // Si no se encuentra ninguna clase
  }

}
