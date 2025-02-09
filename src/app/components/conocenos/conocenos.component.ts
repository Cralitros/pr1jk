import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

import { MenunavegacionComponent } from "../menunavegacion/menunavegacion.component";
import { WindowService } from '../../services/window.service';
import { ParticleAnimationComponent } from "../particle-animation/particle-animation.component";

@Component({
  selector: 'app-conocenos',
  standalone: true,
  imports: [CommonModule, MenunavegacionComponent, ParticleAnimationComponent],
  templateUrl: './conocenos.component.html',
  styleUrl: './conocenos.component.css',

})
export class ConocenosComponent {
  items = ['NOSOTROS', 'MISIÓN', 'VISIÓN', 'VALORES', 'EQUIPO'];
  contenido:any={
    "NOSOTROS": [
      "<p>En <b><u>AVANZA</u></b>, valoramos las ideas, el trabajo en equipo y el compromiso con la excelencia.</p>",
      "<p>Somos un equipo <b><u>apasionado por la calidad</u></b>, enfocados en crear soluciones diferenciadoras.</p>",
      "<p><b><u>Valoramos la confianza</u></b>, el respeto y trabajamos para superar las expectativas de nuestros clientes.</p>",
      "<p>Aquí no solo hacemos las cosas bien, <b><u>las hacemos con corazón</u></b>.</p>"
    ],
    "MISIÓN": [
      "<p><b><u>Ser líderes reconocidos por nuestra excelencia</u></b>, innovación y compromiso a nivel nacional e internacional.</p>",
      "<p>Aspiramos a ser <b><u>referencia en soluciones</u></b> que transformen vidas y generen un impacto positivo.</p>",
      "<p>Trabajamos con <b><u>pasión y determinación</u></b> para construir un futuro que refleje nuestros valores.</p>"
    ],
    "VISIÓN": [
      "<p>Nos comprometemos a trabajar con <b><u>pasión, innovación y responsabilidad</u></b>, fomentando el bienestar comunitario.</p>",
      "<p>Creemos en el impacto positivo de nuestro trabajo, con <b><u>integridad</u></b> y enfocados en superar expectativas.</p>"
    ],
    "VALORES": [
      "<p><b><u>Integridad</u></b>: Actuamos con honestidad y ética, respetando siempre nuestros compromisos.</p>",
      "<p><b><u>Excelencia</u></b>: Buscamos los más altos estándares de calidad en cada proyecto.</p>",
      "<p><b><u>Innovación</u></b>: Fomentamos la creatividad y el pensamiento disruptivo para ofrecer soluciones efectivas.</p>",
      "<p><b><u>Responsabilidad</u></b>: Asumimos nuestro compromiso, cuidando el impacto social y ambiental.</p>",
      "<p><b><u>Trabajo en equipo</u></b>: Creemos en la colaboración y en la unión de talentos para alcanzar metas comunes.</p>",
      "<p><b><u>Empatía</u></b>: Valoramos las necesidades de las personas, priorizando su bienestar en nuestras decisiones.</p>"
    ],
    "EQUIPO":[
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8AuGWYISTet874h-pYWvj_AO6GkCp7zUbQ&s' alt='' srcset=''>",
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYOYAhWERvU7F_k8lMZQ7Nvq71MnlFPqjRg&s' alt='' srcset=''>",
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChvFc_UVmfWb2A2U7pXcADgf6A_7yqqR34A&s' alt='' srcset=''>",
      "<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVoM5NVDa3u-QI7rqLbyMJja9YEUsvGTqNzw&s' alt='' srcset=''>"
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

    console.log(ventanaHeight);
    console.log(contenedorWidth);
    console.log(margenLeft);
    
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
    this.isMenuVisible = false; // Oculta el menú después de seleccionar un ítem

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
  isMenuVisible: boolean = false; // Variable para controlar la visibilidad del menú

  toggleMenu() {
    console.log("click");
    
    this.isMenuVisible = !this.isMenuVisible;
  }
  touchStartX = 0;
  touchEndX = 0;

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
}
