import { Component, ElementRef, ViewChild } from '@angular/core';
import * as BABYLON from 'babylonjs';
import * as GUI from "babylonjs-gui";
import 'babylonjs-loaders';
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

    if (!BABYLON.Engine.isSupported()) {
      return;
    }

    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);

    const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2.5, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, false); // Deshabilita control automático de la cámara

    // Deshabilitar el zoom
    camera.lowerRadiusLimit = camera.radius; // Evita acercarse
    camera.upperRadiusLimit = camera.radius; // Evita alejarse

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 1;

    let meshesToRotate: BABYLON.AbstractMesh[] = [];
    let currentFaceIndex = 0;
    const rotationSequence: BABYLON.Vector3[] = [
      new BABYLON.Vector3(0, Math.PI / 2, 0), // Derecha
      new BABYLON.Vector3(0, -Math.PI / 2, 0), // Izquierda
      new BABYLON.Vector3(Math.PI / 2, 0, 0), // Inferior
      new BABYLON.Vector3(-Math.PI / 2, 0, 0), // Superior
      new BABYLON.Vector3(0, Math.PI, 0), // Atrás
      new BABYLON.Vector3(0, 0, 0) // Delante
    ];

    let isDragging = false;
    let lastMousePosition: { x: number; y: number } | null = null;
    let userInteraction = false; // Bandera para detectar interacción manual
    let resetTimeout: any; // Controlará el temporizador para alinear el cubo

    BABYLON.SceneLoader.AppendAsync('/assets/models/', 'cubopro.glb', scene).then(() => {
      meshesToRotate = scene.meshes.filter(mesh => mesh.name !== "__root__");

      canvas.addEventListener("mousedown", (event) => {
        isDragging = true;
        lastMousePosition = { x: event.clientX, y: event.clientY };
      });

      canvas.addEventListener("mouseup", () => {
        isDragging = false;
        lastMousePosition = null;

        // Reiniciar rotación automática tras interacción manual
        clearTimeout(resetTimeout);
        resetTimeout = setTimeout(() => {
          userInteraction = false;
          alignToNearestFace();
        }, 2000); // 2 segundos de inactividad
      });

      canvas.addEventListener("mousemove", (event) => {
        if (isDragging && lastMousePosition) {
          const deltaX = event.clientX - lastMousePosition.x;
          const deltaY = event.clientY - lastMousePosition.y;
          lastMousePosition = { x: event.clientX, y: event.clientY };

          userInteraction = true; // Marcamos que hay interacción manual

          // Aplicar rotación al cubo
          meshesToRotate.forEach(mesh => {
            mesh.rotation.y += deltaX * 0.01; // Ajusta sensibilidad
            mesh.rotation.x += deltaY * 0.01;
          });
        }
      });

      startRotationSequence();
    });

    function startRotationSequence(): void {
      if (meshesToRotate.length === 0) return;

      setInterval(() => {
        if (!userInteraction) {
          const targetRotation = rotationSequence[currentFaceIndex];

          meshesToRotate.forEach(mesh => {
            BABYLON.Animation.CreateAndStartAnimation(
              "rotateMesh",
              mesh,
              "rotation",
              30,
              60,
              mesh.rotation,
              targetRotation,
              BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
            );
          });

          currentFaceIndex = (currentFaceIndex + 1) % rotationSequence.length;
        }
      }, 8000); // Cambiar cara cada 10 segundos si no hay interacción del usuario
    }

    function alignToNearestFace(): void {
      const currentRotation = meshesToRotate[0].rotation;
      let closestFaceIndex = 0;
      let closestDistance = Infinity;

      rotationSequence.forEach((rotation, index) => {
        const distance = BABYLON.Vector3.Distance(currentRotation, rotation);
        if (distance < closestDistance) {
          closestFaceIndex = index;
          closestDistance = distance;
        }
      });

      const targetRotation = rotationSequence[closestFaceIndex];
      meshesToRotate.forEach(mesh => {
        BABYLON.Animation.CreateAndStartAnimation(
          "alignRotation",
          mesh,
          "rotation",
          30,
          60,
          mesh.rotation,
          targetRotation,
          BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );
      });

      currentFaceIndex = closestFaceIndex; // Actualizamos la cara actual
    }

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });
  }










  /*ngOnInit(): void {
    const canvas = this.renderCanvas.nativeElement as HTMLCanvasElement;
 
    // Comprobar si el navegador soporta WebGL
    if (!BABYLON.Engine.isSupported()) {
      /*alert("WebGL no está soportado en este navegador. Actualiza o cambia de navegador.");*/
  /*    return;
    }
 
    // Inicializar el motor de Babylon.js
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
    // Cámara y luz
    const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2.5, 5, BABYLON.Vector3.Zero(), scene);
 
    // Deshabilitar el zoom
    camera.lowerRadiusLimit = camera.radius; // Evita acercarse
    camera.upperRadiusLimit = camera.radius; // Evita alejarse
 
    camera.lowerAlphaLimit = null; // Sin límite horizontal (rotación libre)
    camera.upperAlphaLimit = null;
 
    camera.lowerBetaLimit = null;       // Límite inferior para no ver desde abajo del objeto
    camera.upperBetaLimit = null; // Límite superior para no ver desde arriba del objeto
 
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    light.intensity = 1; // Aumenta la intensidad
 
    // Añadir luz
   // const bottomLight = new BABYLON.DirectionalLight("bottomLight", new BABYLON.Vector3(0, -1, 0), scene);
   // bottomLight.intensity = 0.5; // Ajusta la intensidad según sea necesario
 
    // Crear una luz direccional que ilumine la cara frontal
    const directionalLight = new BABYLON.DirectionalLight("directionalLight", new BABYLON.Vector3(0, 0, -1), scene);
    directionalLight.position = new BABYLON.Vector3(0, 1, 2); // Posicionar la luz para que ilumine la cara frontal
    directionalLight.intensity = 0.3;  // Ajustar la intensidad según sea necesario
 
 
    // Luz hemisférica para iluminación global más uniforme
    const hemisphericLight = new BABYLON.HemisphericLight("hemisphericLight", new BABYLON.Vector3(0, 1, 0), scene);
    hemisphericLight.intensity = 0.8; // Ajusta la intensidad según sea necesario
    hemisphericLight.specular = new BABYLON.Color3(1, 1, 1); // Especular para brillos
    hemisphericLight.diffuse = new BABYLON.Color3(1, 1, 1);  // Luz difusa
 
    // Luz direccional superior para iluminar de arriba hacia abajo
    const topLight = new BABYLON.DirectionalLight("topLight", new BABYLON.Vector3(0, -1, 0), scene);
    topLight.position = new BABYLON.Vector3(0, 5, 0); // Coloca la luz por encima del cubo
    topLight.intensity = 1; // Aumenta la intensidad
 
    // Luz direccional inferior para iluminar de abajo hacia arriba
    const bottomLight = new BABYLON.DirectionalLight("bottomLight", new BABYLON.Vector3(0, -1, 0), scene);
    bottomLight.position = new BABYLON.Vector3(0, -5, 1); // Coloca la luz por debajo del cubo
    bottomLight.intensity = 3; // Ajusta la intensidad según sea necesario
 
    // Luz frontal para iluminar la cara visible
    const frontLight = new BABYLON.DirectionalLight("frontLight", new BABYLON.Vector3(0, 0, -1), scene);
    frontLight.position = new BABYLON.Vector3(0, 1, 2); // Posicionar frente al cubo
    frontLight.intensity = 0.5;
 
    // Luz trasera para iluminar la cara opuesta
    const backLight = new BABYLON.DirectionalLight("backLight", new BABYLON.Vector3(0, 0, 1), scene);
    backLight.position = new BABYLON.Vector3(0, 1, -2);
    backLight.intensity = 0.5;
 
 
    // Crear un cubo
    BABYLON.SceneLoader.AppendAsync(
      '/assets/models/',   // Ruta del archivo GLB
      'cuboilum.glb', // Nombre del archivo GLB (debe estar en la carpeta assets)
      scene,       // La escena a la que se añadirá el modelo
      function (scene) {
        // El modelo GLB se cargó correctamente
        console.log('GLB cargado correctamente');
        // Hacer algo adicional si es necesario, por ejemplo, ajustar la cámara para que se enfoque en el modelo.
      },
      null       // Puedes pasar una función de progreso si lo deseas
    );
 
    // Rotación automática de la cámara
    let currentAlpha = 0; // Rotación horizontal
    let currentBeta = Math.PI / 2.5; // Rotación vertical (inicial)
    let step = 0; // Contador de pasos para alternar entre rotaciones
 
    setInterval(() => {
      if (step % 4 === 0) {
        // Vista superior
        currentBeta = 0.1; // Un poco por encima del eje para no chocar con el modelo
      } else if (step % 4 === 1) {
        // Vista horizontal rotando 90°
        currentBeta = Math.PI / 2.5; // Vista media
        currentAlpha += Math.PI / 2; // Gira horizontalmente 90°
      } else if (step % 4 === 2) {
        // Vista inferior
        currentBeta = Math.PI - 0.1; // Un poco por debajo del eje
      } else if (step % 4 === 3) {
        // Vista horizontal rotando 90°
        currentBeta = Math.PI / 2.5; // Regresa a la vista media
        currentAlpha += Math.PI / 2; // Gira horizontalmente 90°
      }
 
      // Normalizar alpha a un rango de 0 - 2π
      if (currentAlpha >= 2 * Math.PI) {
        currentAlpha -= 2 * Math.PI;
      }
 
      // Animar alpha y beta
      BABYLON.Animation.CreateAndStartAnimation(
        "rotateCameraAlpha",
        camera,
        "alpha",
        30,
        60,
        camera.alpha,
        currentAlpha,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
 
      BABYLON.Animation.CreateAndStartAnimation(
        "rotateCameraBeta",
        camera,
        "beta",
        30,
        60,
        camera.beta,
        currentBeta,
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
 
      step++; // Incrementar paso
    }, 5000);
 
    // Ejecutar el bucle de renderizado
    engine.runRenderLoop(() => {
      scene.render();
    });
 
    // Ajustar el tamaño del lienzo cuando la ventana cambia de tamaño
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }*/

}
