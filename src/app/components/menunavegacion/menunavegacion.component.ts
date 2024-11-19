import { Component } from '@angular/core';

@Component({
  selector: 'app-menunavegacion',
  standalone: true,
  imports: [],
  templateUrl: './menunavegacion.component.html',
  styleUrl: './menunavegacion.component.css'
})
export class MenunavegacionComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  //isMenuOpen = false;
  isSubMenuOpen = false;

  toggleSubMenu() {
      this.isSubMenuOpen = !this.isSubMenuOpen;
  }
}
