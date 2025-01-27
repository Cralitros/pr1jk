import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { MenunavegacionComponent } from "../menunavegacion/menunavegacion.component";

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [CommonModule, MenunavegacionComponent],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css',

})
export class ConocenosComponent {
  items = ['NOSOTROS', 'MISIÓN', 'VISIÓN', 'VALORES', 'EQUIPO'];
  contenido:any={
    "NOSOTROS": [
      "<p>En <b>AVANZA</b>, creemos en el poder de las ideas, el trabajo en equipo y el compromiso con la excelencia.</p>",
      "<p>Somos un grupo apasionado por los productos de calidad, enfocado en crear soluciones que marcan la diferencia.</p>",
      "<p>Valoramos las relaciones basadas en la confianza, la transparencia y el respeto mutuo, y trabajamos día a día para superar las expectativas de quienes confían en nosotros.</p>",
      "<p>Aquí no solo hacemos las cosas bien, las hacemos con corazón.</p>"
    ],
    "MISIÓN": [
      "<p>Ser una organización reconocida por su excelencia, innovación y compromiso, destacándonos como líderes a nivel nacion e internacional.</p>",
      "<p>Aspiramos a ser una referencia en la creación de soluciones que transformen vidas, fomenten el desarrollo sostenible y generen un impacto positivo en la sociedad.</p>",
      "<p>Trabajamos con pasión y determinación para construir un futuro en el que nuestros valores y logros sean el reflejo de un esfuerzo constante por mejorar el mundo que nos rodea.</p>"
    ],
    "VISIÓN": [
      "<p>Nos comprometemos a trabajar con pasión, innovación y responsabilidad, contribuyendo al crecimiento sostenible y al bienestar de nuestra comunidad.</p>",
      "<p>Creemos en el impacto positivo de nuestro trabajo y en la importancia de hacerlo con integridad, siempre enfocados en superar las expectativas y construir un futuro mejor.</p>"
    ],
    "VALORES": [
      "<p><b>Integridad</b>: Actuamos con honestidad y ética en todo lo que hacemos, respetando siempre nuestros compromisos.</p>",
      "<p><b>Excelencia</b>: Nos esforzamos por alcanzar los más altos estándares de calidad en cada uno de nuestros proyectos.</p>",
      "<p><b>Innovación</b>: Fomentamos la creatividad y el pensamiento disruptivo para ofrecer soluciones únicas y efectivas.</p>",
      "<p><b>Responsabilidad</b>: Asumimos nuestro papel con compromiso, cuidando el impacto social y ambiental de nuestras acciones.</p>",
      "<p><b>Trabajo en equipo</b>: Creemos en el poder de la colaboración y en la unión de talentos para alcanzar metas comunes.</p>",
      "<p><b>Empatía</b>: Escuchamos y valoramos las necesidades de las personas, colocando el bienestar humano en el centro de nuestras decisiones.</p>"
    ]
  }
  



  selectedItem?: any | null = null;

  selectItem(index: any): void {
    this.selectedItem = index;
    this.currentItem = 0;

  }
  elemento() {
    return this.items[this.selectedItem!];
  }
  contenidoD() {
   // console.log(this.contenido[this.selectedItem]);
    
    return this.selectedItem ? this.contenido[this.selectedItem] : [];
  }
  ngOnInit() {

  }
  currentItem: number = 0;

  // Devuelve el estilo de transformación para cada tarjeta
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

  prev() {
    this.currentItem = (this.currentItem === 0) ? this.contenido[this.selectedItem].length - 1 : this.currentItem - 1;
  }

  next() {
    this.currentItem = (this.currentItem === this.contenido[this.selectedItem].length - 1) ? 0 : this.currentItem + 1;
  }
}
