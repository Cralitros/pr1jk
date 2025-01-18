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
  contenido=["<p>En <b>AVANZA</b>, creemos en el poder de las ideas, el trabajo en equipo y el compromiso con la excelencia."+
    "<br>Somos un grupo apasionado por los productos de calidad, enfocado en crear soluciones que marcan la "+
    "diferencia.<br>Valoramos las relaciones basadas en la confianza, la transparencia y el respeto mutuo, y "+
    "trabajamos día a día para superar las expectativas de quienes confían en nosotros.<br>Aquí no solo hacemos las cosas bien, las hacemos con corazón.</p>",
    "<p>Ser una organización reconocida por su excelencia, innovación y compromiso, destacándonos como líderes a nivel nacion e internacional. Aspiramos "+
    "a ser una referencia en la creación de soluciones que transformen vidas, fomenten el desarrollo sostenible y generen un impacto positivo en la "+
    "sociedad.<br>Trabajamos con pasión y determinación para construir un futuro en el que nuestros valores y logros sean el reflejo de un esfuerzo "+
    "constante por mejorar el mundo que nos rodea.</p>",
    "<p>Nuestra misión es ofrecer servicios y productos de calidad que respondan a las necesidades de nuestros clientes, generando valor y fomentando "+
    "relaciones de confianza.<br>Nos comprometemos a trabajar con pasión, innovación y responsabilidad, contribuyendo al crecimiento sostenible y al "+
    "bienestar de nuestra comunidad.<br>Creemos en el impacto positivo de nuestro trabajo y en la importancia de hacerlo con integridad, siempre "+
    "enfocados en superar las expectativas y construir un futuro mejor.</p>",
    "<ul><li><b>Integridad</b>: Actuamos con honestidad y ética en todo lo que hacemos, respetando siempre nuestros compromisos.</li>"+
    "<li><b>Excelencia</b>: Nos esforzamos por alcanzar los más altos estándares de calidad en cada uno de nuestros proyectos.</li>"+
    "<li><b>Innovación</b>: Fomentamos la creatividad y el pensamiento disruptivo para ofrecer soluciones únicas y efectivas.</li>"+
    "<li><b>Responsabilidad</b>: Asumimos nuestro papel con compromiso, cuidando el impacto social y ambiental de nuestras acciones.</li>"+
    "<li><b>Trabajo en equipo</b>: Creemos en el poder de la colaboración y en la unión de talentos para alcanzar metas comunes.</li>"+
    "<li><b>Empatía</b>: Escuchamos y valoramos las necesidades de las personas, colocando el bienestar humano en el centro de nuestras decisiones.</li></ul>",
  ];
  selectedItem?: number | null = null;

  selectItem(index: number): void {
    this.selectedItem = index;

    console.log(this.selectedItem);
    
  }
  elemento(){
    return this.items[this.selectedItem!];
  }
  contenidoD(){
    return this.contenido[this.selectedItem!];
  }
  ngOnInit() {

  }





}
