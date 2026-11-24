import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MateriasService } from '../../Services/materias';
import { Tabla } from '../../Components/tabla/tabla';

@Component({
  selector: 'app-materias',
  imports: [Tabla],
  templateUrl: './materias.html',
  styleUrl: './materias.css',
})
export class Materias implements OnInit {
  data: any[] = [];

  constructor(private materiasService: MateriasService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.materiasService.getMaterias().subscribe((rows: any[]) => {
      this.data = rows;
      this.cdr.detectChanges();
    });
  }
}