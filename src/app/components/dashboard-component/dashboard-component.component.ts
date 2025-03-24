import { Component } from '@angular/core';
import { provideCharts, withDefaultRegisterables, BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions, ChartType } from "chart.js";
import { TableComponent } from '../shared/table/table.component';
import { DateService } from '../../services/data.service';
import { salesDta, Sale } from '../utils/sales';

@Component({
  selector: 'app-dashboard-component',
  imports: [BaseChartDirective, TableComponent],
  templateUrl: './dashboard-component.component.html',
  standalone: true,
  providers: [provideCharts(withDefaultRegisterables())],
})
export class DashboardComponentComponent {
  title = 'ng2-charts-demo';
  selectedDate: Date | null = null;

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Sales',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };

  public lineChartLegend = true;

  constructor(private dateService: DateService) {}

  ngOnInit() {

    const initialDate = this.selectedDate || new Date();     this.selectedDate = initialDate;


    this.filterSalesByDate(this.selectedDate);


    this.dateService.selectedDate$.subscribe(date => {
      if (date) {
        this.selectedDate = date;
        this.filterSalesByDate(date);
      }
    });
  }

  filterSalesByDate(selectedDate: Date) {
    const sixMonthsAgo = new Date(selectedDate);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 5); // Restamos 5 meses porque el mes actual cuenta


    const filteredSales: Sale[] = salesDta.filter((sale: Sale) => {
      return sale.date >= sixMonthsAgo && sale.date <= selectedDate;
    });


    const labels: string[] = [];
    for (let i = 0; i < 6; i++) {
      const month = new Date(selectedDate);
      month.setMonth(selectedDate.getMonth() - i);
      labels.unshift(month.toLocaleString('default', { month: 'long' }));
    }


    const data = labels.map(month => {
      const monthSales = filteredSales.filter(sale => sale.date.toLocaleString('default', { month: 'long' }) === month);
      return monthSales.reduce((sum, sale) => sum + sale.sales, 0); // Sumar ventas del mismo mes
    });


    this.lineChartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          label: 'Sales',
          fill: true,
          tension: 0.5,
          borderColor: 'black',
          backgroundColor: 'rgba(255,0,0,0.3)'
        }
      ]
    };
  }
}
