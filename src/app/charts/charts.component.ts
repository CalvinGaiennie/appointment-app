import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { Chart } from 'chart.js';
import {
  BarController,
  CategoryScale,
  LinearScale,
  BarElement,
} from 'chart.js';

Chart.register(BarController, CategoryScale, LinearScale, BarElement);

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css',
})
export class ChartsComponent {
  barChartData = {
    labels: ['A', 'B', 'C', 'D'],
    datasets: [
      {
        data: [10, 20, 30, 40],
        label: 'Sample Data',
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgb(0, 123, 255)',
        borderWidth: 1,
      },
    ],
  };

  barChartOptions = {
    responsive: true,
    plugins: {
      title: { display: true, text: 'Sample Bar Chart' },
    },
  };
}
