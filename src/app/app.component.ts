import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PresentacionComponent } from "./components/presentacion/presentacion.component";
import { SegundavistaComponent } from "./components/segundavista/segundavista.component";
import { isPlatformBrowser } from '@angular/common';
import { ConocenosComponent } from "./components/conocenos/conocenos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PresentacionComponent, SegundavistaComponent, ConocenosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pr1jk';
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngAfterViewInit(): void {
    // Verificar si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const sections = document.querySelectorAll('.section');
      const mision = document.querySelectorAll('.mision');

      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('revealed');
              observer.unobserve(entry.target); // Deja de observar una vez visible
            }
          });
        },
        { threshold: 0.1 } // Detecta cuando al menos el 10% del elemento es visible
      );

      sections.forEach(section => observer.observe(section));
      mision.forEach(section => observer.observe(section));
    }
  }
}
