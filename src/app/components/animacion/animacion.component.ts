import { Component, ElementRef, ViewChild } from '@angular/core';
import * as BABYLON from 'babylonjs';

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

    // Comprobar si el navegador soporta WebGL
    if (!BABYLON.Engine.isSupported()) {
      /*alert("WebGL no está soportado en este navegador. Actualiza o cambia de navegador.");*/
      return;
    }

    // Inicializar el motor de Babylon.js
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    // Cámara y luz
    const camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2.5, 5, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Crear un cubo
    BABYLON.SceneLoader.AppendAsync(
      '/assets/models/',   // Ruta del archivo GLB
      'cubo.gltf', // Nombre del archivo GLB (debe estar en la carpeta assets)
      scene,       // La escena a la que se añadirá el modelo
      function (scene) {
        // El modelo GLB se cargó correctamente
        console.log('GLB cargado correctamente');
        // Hacer algo adicional si es necesario, por ejemplo, ajustar la cámara para que se enfoque en el modelo.
      },
      null       // Puedes pasar una función de progreso si lo deseas
    /*  function (scene, message, exception) {
        // Manejar errores si la carga del GLB falla
        console.error(message, exception);
        alert('Error al cargar el modelo GLB');
      }*/
    );

    // Ejecutar el bucle de renderizado
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Ajustar el tamaño del lienzo cuando la ventana cambia de tamaño
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }
  /*ngOnInit(): void {
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
    camera.fov = 0.5;

    // Deshabilitar el zoom
    camera.lowerRadiusLimit = camera.radius; // Evita acercarse
    camera.upperRadiusLimit = camera.radius; // Evita alejarse

    // Limitar la rotación vertical (opcional)
    /*camera.lowerBetaLimit = Math.PI / 3; // Límite inferior
    camera.upperBetaLimit = Math.PI / 3; // Límite superior*/

  /*  camera.lowerAlphaLimit = null; // Sin límite horizontal (rotación libre)
    camera.upperAlphaLimit = null;

    camera.lowerBetaLimit = null;       // Límite inferior para no ver desde abajo del objeto
    camera.upperBetaLimit = null; // Límite superior para no ver desde arriba del objeto

    // Bloquear el botón derecho del mouse
    canvas.addEventListener("contextmenu", (event) => {
      event.preventDefault(); // Bloquea el menú contextual del botón derecho
    });

    // Añadir luz
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Crear una luz direccional que ilumine la cara frontal
    const directionalLight = new BABYLON.DirectionalLight("directionalLight", new BABYLON.Vector3(0, 0, -1), scene);
    directionalLight.position = new BABYLON.Vector3(0, 1, 2); // Posicionar la luz para que ilumine la cara frontal
    directionalLight.intensity = 0.3;  // Ajustar la intensidad según sea necesario


    // Crear una figura (cubo)
    const box = BABYLON.MeshBuilder.CreateBox("box", { size: 1.5 }, scene);

    /* const faceMaterial = new BABYLON.StandardMaterial("faceMaterial", scene);
     faceMaterial.diffuseColor = BABYLON.Color3.FromHexString("#bbd7c8");*/
  // Crear materiales para cada cara
  /*    const frontMaterial = new BABYLON.StandardMaterial("frontMaterial", scene);
      const backMaterial = new BABYLON.StandardMaterial("backMaterial", scene);
      const topMaterial = new BABYLON.StandardMaterial("topMaterial", scene);
      const bottomMaterial = new BABYLON.StandardMaterial("bottomMaterial", scene);
      const rightMaterial = new BABYLON.StandardMaterial("rightMaterial", scene);
      const leftMaterial = new BABYLON.StandardMaterial("leftMaterial", scene);
  
  
  
  
  
      // Asignar texturas a cada material (sustituye las URLs por las de tus imágenes)
      //frontMaterial.diffuseTexture = new BABYLON.Texture("/assets/engranes.png", scene); // Frontal
      const frmt = new BABYLON.Texture("/assets/engranes3.png", scene);
      frontMaterial.diffuseTexture = frmt;
  
      backMaterial.diffuseTexture = new BABYLON.Texture("/assets/engranes3.png", scene);   // Posterior
      topMaterial.diffuseTexture = new BABYLON.Texture("/assets/engranes3png", scene);    // Superior
      bottomMaterial.diffuseTexture = new BABYLON.Texture("/assets/engranes3.png", scene); // Inferior
      rightMaterial.diffuseTexture = new BABYLON.Texture("/assets/engranes3.png", scene);  // Derecha
      leftMaterial.diffuseTexture = new BABYLON.Texture("/assets/engranes3.png", scene);   // Izquierda
  
      //color de fondo para cada cara
      frontMaterial.diffuseColor = BABYLON.Color3.FromHexString("#bbd7c8");
      backMaterial.diffuseColor = BABYLON.Color3.FromHexString("#bbd7c8");
      topMaterial.diffuseColor = BABYLON.Color3.FromHexString("#bbd7c8");
      bottomMaterial.diffuseColor = BABYLON.Color3.FromHexString("#bbd7c8");
      rightMaterial.diffuseColor = BABYLON.Color3.FromHexString("#bbd7c8");
      leftMaterial.diffuseColor = BABYLON.Color3.FromHexString("#bbd7c8");
  
  
      // MultiMaterial para asignar un material a cada cara
      const multiMaterial = new BABYLON.MultiMaterial("multi", scene);
      multiMaterial.subMaterials.push(frontMaterial);
      multiMaterial.subMaterials.push(backMaterial);
      multiMaterial.subMaterials.push(topMaterial);
      multiMaterial.subMaterials.push(bottomMaterial);
      multiMaterial.subMaterials.push(rightMaterial);
      multiMaterial.subMaterials.push(leftMaterial);
  
      // Asignar multi-material al cubo
      box.subMeshes = [];
      const verticesCount = box.getTotalVertices();
  
      // Dividir el cubo en 6 caras
      box.subMeshes.push(new BABYLON.SubMesh(0, 0, verticesCount, 0, 6, box)); // Cara frontal
      box.subMeshes.push(new BABYLON.SubMesh(1, 0, verticesCount, 6, 6, box)); // Cara trasera
      box.subMeshes.push(new BABYLON.SubMesh(2, 0, verticesCount, 12, 6, box)); // Cara superior
      box.subMeshes.push(new BABYLON.SubMesh(3, 0, verticesCount, 18, 6, box)); // Cara inferior
      box.subMeshes.push(new BABYLON.SubMesh(4, 0, verticesCount, 24, 6, box)); // Cara derecha
      box.subMeshes.push(new BABYLON.SubMesh(5, 0, verticesCount, 30, 6, box)); // Cara izquierda
  
  
      // Asignar el MultiMaterial al cubo
  
  
  
      // Crear material para las caras con color #e4baba
      /*const faceMaterial = new BABYLON.StandardMaterial("faceMaterial", scene);
      faceMaterial.diffuseColor = BABYLON.Color3.FromHexString("#bbd7c8");*/

  /*   box.material = multiMaterial;
     // Crear un contorno para los bordes del cubo
     const highlightLayer = new BABYLON.HighlightLayer("highlightLayer", scene);
 
     // Color del borde
     const borderColor = BABYLON.Color3.FromHexString("#fce2a6");
 
     // Resaltar todos los bordes del cubo con el color especificado
     highlightLayer.addMesh(box, borderColor);
 
     // Secuencia de rotaciones para cada cara
     const rotations = [
       { x: 0, y: 0, z: 0 },                // Frontal
       { x: 0, y: Math.PI, z: 0 },          // Posterior
       { x: -Math.PI / 2, y: 0, z: 0 },     // Superior
       { x: Math.PI / 2, y: 0, z: 0 },      // Inferior
       { x: 0, y: Math.PI / 2, z: 0 },      // Derecha
       { x: 0, y: -Math.PI / 2, z: 0 },     // Izquierda
     ];
 
     // Índice actual en la secuencia
     let currentIndex = 0;
 
     // Función para animar la rotación del cubo
     const animateToRotation = (targetRotation: { x: number; y: number; z: number }) => {
       const animationX = new BABYLON.Animation(
         "rotationX",
         "rotation.x",
         60,
         BABYLON.Animation.ANIMATIONTYPE_FLOAT,
         BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
       );
 
       const animationY = new BABYLON.Animation(
         "rotationY",
         "rotation.y",
         60,
         BABYLON.Animation.ANIMATIONTYPE_FLOAT,
         BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
       );
 
       const animationZ = new BABYLON.Animation(
         "rotationZ",
         "rotation.z",
         60,
         BABYLON.Animation.ANIMATIONTYPE_FLOAT,
         BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
       );
 
       const keysX = [
         { frame: 0, value: box.rotation.x },
         { frame: 60, value: targetRotation.x },
       ];
       const keysY = [
         { frame: 0, value: box.rotation.y },
         { frame: 60, value: targetRotation.y },
       ];
       const keysZ = [
         { frame: 0, value: box.rotation.z },
         { frame: 60, value: targetRotation.z },
       ];
 
       animationX.setKeys(keysX);
       animationY.setKeys(keysY);
       animationZ.setKeys(keysZ);
 
       box.animations = [animationX, animationY, animationZ];
       scene.beginAnimation(box, 0, 60, false);
     };
 
     // Función para avanzar a la siguiente cara
     const rotateToNextFace = () => {
       currentIndex = (currentIndex + 1) % rotations.length; // Avanza al siguiente índice
       animateToRotation(rotations[currentIndex]);
     };
 
     // Mostrar la primera cara durante 4 segundos, luego comenzar las rotaciones
     setTimeout(() => {
       setInterval(() => {
         rotateToNextFace();
       }, 2000); // Rotar cada 2 segundos
     }, 4000); // Esperar 4 segundos iniciales
 
     // Render loop
     engine.runRenderLoop(() => {
       /*camera.alpha += alphaSpeed; // Gira horizontalmente (eje Y)
       camera.beta += betaSpeed;  // Gira verticalmente (eje X)
 
       // Invertir la dirección de beta para que no pase más allá de los límites
       if (camera.beta <= 0 || camera.beta >= Math.PI) {
         betaSpeed *= -1; // Cambia de dirección
       }*/
  /*    scene.render();
    });

    // Ajustar tamaño al cambiar la ventana
    window.addEventListener("resize", () => {
      engine.resize();
    });
  }*/


}
