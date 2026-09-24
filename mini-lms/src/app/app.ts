import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- Importante para [(ngModel)]

interface Estudiante {
  nombre: string;
  creditos: number;
  edad: number;
  nota?: number; // Es opcional o puede iniciar sin valor
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // <--- Agregamos FormsModule aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Mini-LMS · Lista de estudiantes';

  estudiantes: Estudiante[] = [
    { nombre: 'María Torres', edad: 15, creditos: 18, nota: 16 },
    { nombre: 'Luis Pérez', edad: 18, creditos: 8, nota: 9 },
    { nombre: 'Ana Ruiz', edad: 99, creditos: 14, nota: 0 }
  ];

  estado(creditos: number): string {
    if (creditos < 1 || creditos > 24) {
      return 'Créditos inválidos';
    } else if (creditos >= 12) {
      return 'Matriculado';
    }
    return 'Pendiente';
  }

  esMayorDeEdad(edad: number): boolean {
    return edad >= 18;
  }

  evaluacionNota(nota?: number): string {
    if (nota === undefined || nota === null) {
      return 'Sin nota';
    }
    return nota >= 11 ? 'Aprobado' : 'Desaprobado';
  }
}