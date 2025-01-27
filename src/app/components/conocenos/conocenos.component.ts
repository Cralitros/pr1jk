import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { MenunavegacionComponent } from "../menunavegacion/menunavegacion.component";
import { WindowService } from '../../services/window.service';

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
      "<p>En <b>AVANZA</b>, valoramos las ideas, el trabajo en equipo y el compromiso con la excelencia.</p>",
      "<p>Somos un equipo apasionado por la calidad, enfocados en crear soluciones diferenciadoras.</p>",
      "<p>Valoramos la confianza, el respeto y trabajamos para superar las expectativas de nuestros clientes.</p>",
      "<p>Aquí no solo hacemos las cosas bien, las hacemos con corazón.</p>"
    ],
    "MISIÓN": [
      "<p>Ser líderes reconocidos por nuestra excelencia, innovación y compromiso a nivel nacional e internacional.</p>",
      "<p>Aspiramos a ser referencia en soluciones que transformen vidas y generen un impacto positivo.</p>",
      "<p>Trabajamos con pasión y determinación para construir un futuro que refleje nuestros valores.</p>"
    ],
    "VISIÓN": [
      "<p>Nos comprometemos a trabajar con pasión, innovación y responsabilidad, fomentando el bienestar comunitario.</p>",
      "<p>Creemos en el impacto positivo de nuestro trabajo, con integridad y enfocados en superar expectativas.</p>"
    ],
    "VALORES": [
      "<p><b>Integridad</b>: Actuamos con honestidad y ética, respetando siempre nuestros compromisos.</p>",
      "<p><b>Excelencia</b>: Buscamos los más altos estándares de calidad en cada proyecto.</p>",
      "<p><b>Innovación</b>: Fomentamos la creatividad y el pensamiento disruptivo para ofrecer soluciones efectivas.</p>",
      "<p><b>Responsabilidad</b>: Asumimos nuestro compromiso, cuidando el impacto social y ambiental.</p>",
      "<p><b>Trabajo en equipo</b>: Creemos en la colaboración y en la unión de talentos para alcanzar metas comunes.</p>",
      "<p><b>Empatía</b>: Valoramos las necesidades de las personas, priorizando su bienestar en nuestras decisiones.</p>"
    ]
  }
  


  //contenedor: HTMLElement | null = null;
  @ViewChild('contenedor', { static: true }) contenedor!: ElementRef;
  constructor(private renderer: Renderer2,
    private windowService: WindowService,
    private el: ElementRef) {}
  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // Obtén referencia del contenedor
    //this.contenedor = this.el.nativeElement.querySelector('.contenedor');
    this.centrarDiv();
  }
  // Detecta cambio de tamaño de la ventana
  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.centrarDiv();
  }

  // Calcula márgenes para centrar el div
  centrarDiv(): void {
    if (!this.contenedor) return;
    const windowRef = this.windowService.nativeWindow;

    if (!this.contenedor || !windowRef) {
      console.error('El contenedor o el objeto window no están disponibles');
      return;
    }

    const ventanaWidth = window.innerWidth;
    const ventanaHeight = window.innerHeight;
    const contenedorWidth = this.contenedor.nativeElement.offsetWidth;
    const contenedorHeight = this.contenedor.nativeElement.offsetHeight;

    const margenTop = (ventanaHeight - contenedorHeight) / 2;
    const margenLeft = (ventanaWidth - contenedorWidth) / 2;

   /* this.renderer.setStyle(
      this.contenedor.nativeElement,
      'margin-top',
      `${margenTop}px`
    );*/
    this.renderer.setStyle(
      this.contenedor.nativeElement,
      'margin-left',
      `${margenLeft}px`
    );
  }

  selectedItem?: any | null = null;
  selectedIndex?: any | null = null;
  selectItem(item: any,index:any): void {
    this.selectedItem = item;
    this.selectedIndex=index;
    this.currentItem = 0;

    console.log(this.selectedItem);
    

  }
  elemento() {
    return this.items[this.selectedItem!];
  }
  contenidoD() {
   // console.log(this.contenido[this.selectedItem]);
    
    return this.selectedItem ? this.contenido[this.selectedItem] : [];
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
