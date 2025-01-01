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
  selectedItem?: number | null = null;

  selectItem(index: number): void {
    this.selectedItem = index;

    console.log(this.selectedItem);
    
  }
  elemento(){
    return this.items[this.selectedItem!];
  }

  ngOnInit() {

  }





}
