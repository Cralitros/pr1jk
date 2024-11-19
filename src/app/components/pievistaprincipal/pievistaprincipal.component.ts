import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pievistaprincipal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pievistaprincipal.component.html',
  styleUrl: './pievistaprincipal.component.css'
})
export class PievistaprincipalComponent {
  items = ['CONOCE COMO DARLE COMPETITIVIDAD A TU NEGOCIO.',
    'ORGANIZA TUS IDEAS.',
    'AUTOMATIZA TUS PROCESOS.',
    'GENERA Y GESTIONA TU CADENA DE VALOR.'];
  private intervaloContador: any;
  animate = false;
  itemSeleccionado = "";
  public contador: number = 4; // Inicializamos el contador en 6 segun
  constructor() {

  }
  ngOnInit() {
    this.itemSeleccionado = this.items[0];
    this.change();
  }
  ngAfterViewOnInit() {

  }

  ngOnDestroy() {
    if (this.intervaloContador) {
      clearInterval(this.intervaloContador); // Limpiar el intervalo cuando el componente se destruye
    }

  }
  actualizacion() {
    setInterval(() => {
      console.log("¡Hola! Este mensaje se repite cada 3 segundos.");
    }, 3000);
  }

  change() {
    this.intervaloContador = setInterval(() => {
      this.contador--; // Reducir el contador
      if (this.contador === 0) {
        this.contador = 6; // Reiniciar el contador después de llegar a 0
      }
      this.currentSlide(this.contador)
    }, 3000); // Cada segundo se actualiza el contador
  }

  currentSlide(indice: any) {
    // console.log(indice);
    this.itemSeleccionado = this.items[indice];
    this.triggerAnimation();
    //this.actualizacion();
  }

  triggerAnimation() {
    this.animate = false; // Reinicia el estado
    setTimeout(() => {
      this.animate = true; // Activa la animación
    }, 10); // Espera un breve momento para reiniciar la clase
  }

  resetAnimation() {
    this.animate = false; // Limpia la clase después de la animación
  }

}
