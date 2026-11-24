import { Component, computed, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tabla',
  imports: [MatTableModule],
  templateUrl: './tabla.html',
  styleUrl: './tabla.css',
})
export class Tabla {
  // Los datos llegan desde la vista (input)
  data = input<any[]>([]);

  // Las columnas se sacan de la data: las llaves del primer objeto
  columns = computed(() => {
    const primero = this.data()[0];
    return primero ? Object.keys(primero) : [];
  });

  // Las columnas que se muestran en la tabla
  displayedColumns = computed(() => this.columns());
}