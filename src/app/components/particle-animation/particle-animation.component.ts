import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-particle-animation',
  standalone: true,
  imports: [],
  templateUrl: './particle-animation.component.html',
  styleUrl: './particle-animation.component.css'
})
export class ParticleAnimationComponent {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private particles: Particle[] = [];
  private numParticles = 100; // Número de partículas
  private maxDistance = 100; // Distancia máxima para dibujar líneas
  private animationFrameId!: number;

  // Variables globales para el canvas y su contexto
  private canvas!: HTMLCanvasElement;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.canvas = this.canvasRef.nativeElement;
      this.ctx = this.canvas.getContext('2d')!;
      this.resizeCanvas();
      this.initParticles();
      this.animate();
    }
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.resizeCanvas();
  }

  private resizeCanvas(): void {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  private initParticles(): void {
    for (let i = 0; i < this.numParticles; i++) {
      this.particles.push(new Particle(this.canvas.width, this.canvas.height));
    }
  }

  private animate(): void {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Actualizar y dibujar partículas
    this.particles.forEach(particle => {
      particle.update(this.canvas.width, this.canvas.height);
      particle.draw(this.ctx);
    });

    // Dibujar líneas entre partículas cercanas
    this.drawLines();

    // Llamar a la siguiente animación
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  private drawLines(): void {
    for (let i = 0; i < this.particles.length; i++) {
      for (let j = i + 1; j < this.particles.length; j++) {
        const dx = this.particles[i].x - this.particles[j].x;
        const dy = this.particles[i].y - this.particles[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.maxDistance) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.particles[i].x, this.particles[i].y);
          this.ctx.lineTo(this.particles[j].x, this.particles[j].y);
          this.ctx.strokeStyle = `rgba(0, 0, 255, ${1 - distance / this.maxDistance})`; // Líneas azules
          this.ctx.lineWidth = 1;
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }
    }
  }
}

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;

  constructor(width: number, height: number) {
    this.x = Math.random() * width; // Posición X aleatoria
    this.y = Math.random() * height; // Posición Y aleatoria
    this.vx = (Math.random() - 0.5) * 2; // Velocidad X aleatoria
    this.vy = (Math.random() - 0.5) * 2; // Velocidad Y aleatoria
    this.radius = 2; // Tamaño de la partícula
  }

  update(width: number, height: number): void {
    // Actualizar posición
    this.x += this.vx;
    this.y += this.vy;

    // Rebote en los bordes
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    // Dibujar la partícula
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = 'blue'; // Partículas azules
    ctx.fill();
    ctx.closePath();
  }
}