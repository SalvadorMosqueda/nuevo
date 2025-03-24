import { Component, OnInit } from '@angular/core';
import { ventas } from '../../utils/SalesData';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-table',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './table.component.html',
})
export class TableComponent {
  sales = ventas;

}
