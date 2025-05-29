import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { Vehiculo } from '../../models/vehiculo.model';
import { VehiculoService } from '../../services/vehiculo';

@Component({
  selector: 'app-vehiculos',
  standalone: true,                 // Marca el componente como standalone
  imports: [CommonModule],          // IMPORTANTE: agrega CommonModule aquí
  templateUrl: './vehiculos-component.html'
})
export class VehiculosComponent implements OnInit {
  vehiculos: Vehiculo[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.obtenerVehiculos();
  }

  obtenerVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe({
      next: (data) => this.vehiculos = data,
      error: (err) => console.error('Error al obtener vehículos', err)
    });
  }
  
}
