import { Component, ElementRef, ViewChild } from '@angular/core';
import * as BABYLON from '@babylonjs/core';

@Component({
  selector: 'app-animacion',
  standalone: true,
  imports: [],
  templateUrl: './animacion.component.html',
  styleUrl: './animacion.component.css'
})
export class AnimacionComponent {
  @ViewChild('renderCanvas', { static: true }) renderCanvas!: ElementRef;

  ngOnInit(): void {
    const canvas = this.renderCanvas.nativeElement as HTMLCanvasElement;

    // Crear un engine y una escena
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    // Hacer el fondo transparente
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    // Crear una cámara ArcRotateCamera
    const camera = new BABYLON.ArcRotateCamera(
      "Camera",
      Math.PI / 2, // Ángulo inicial horizontal
      Math.PI / 2, // Ángulo inicial vertical
      5,          // Distancia desde el centro
      BABYLON.Vector3.Zero(), // Objetivo de la cámara
      scene
    );

    camera.attachControl(canvas, true); // Permitir interacción con el mouse
    camera.fov=0.5;

    // Deshabilitar el zoom
    camera.lowerRadiusLimit = camera.radius; // Evita acercarse
    camera.upperRadiusLimit = camera.radius; // Evita alejarse

    // Limitar la rotación vertical (opcional)
    camera.lowerBetaLimit = Math.PI / 3; // Límite inferior
    camera.upperBetaLimit = Math.PI / 3; // Límite superior

    // Añadir luz
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Crear una figura (cubo)
    const box = BABYLON.MeshBuilder.CreateBox("box", {size: 1.5}, scene);

    // Render loop
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Ajustar tamaño al cambiar la ventana
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }

}
