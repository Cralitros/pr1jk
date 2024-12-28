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
  @ViewChild('objetivo') objetivo!: ElementRef;
  isVisible = false;
  private observer!: IntersectionObserver;
  mostrarTarjeta: boolean = false;

  ngOnInit() {
    setTimeout(() => {
      this.mostrarTarjeta = true; // Activa la animación después de 1 segundo
    }, 1000);
  }

  ngAfterViewInit() {
    this.initObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  private initObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible = true; // Mostrar la tarjeta
          } else {
            this.isVisible = false; // Ocultar la tarjeta
          }
        });
      },
      { threshold: 0.1 } // Detecta cuando el contenedor es visible al menos en un 10%
    );

    if (this.objetivo && this.objetivo.nativeElement) {
      this.observer.observe(this.objetivo.nativeElement);
    }
  }
}
