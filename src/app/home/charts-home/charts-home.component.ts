import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
@Component({
  selector: 'app-charts-home',
  templateUrl: './charts-home.component.html',
  styleUrls: ['./charts-home.component.css']
})
export class ChartsHomeComponent implements OnInit{
  ngOnInit(): void {
    this.CreateLineCharts()
  }
  CreateLineCharts(){
   const barChartOptions = { series: [
      {
        data: [250, 150, 190 , 255, 150],
        name: 'Products',
      },
    ],
    chart: {
      type: 'bar',
      background: 'transparent',
      height: 350,
      toolbar: {
        show: false,
      },
    },
    colors: ['#FF7F5C', '#FF7F5C', '#FF7F5C', '#FF7F5C', '#FF7F5C'],
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 2,
        horizontal: false,
        columnWidth: '11px',
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
    grid: {
      borderColor: '#57596e',
      yaxis: {
        lines: {
          show: true,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: false,
      position: 'top',
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2,
    },
    tooltip: {
      shared: true,
      intersect: false,
      theme: 'dark',
    },
    xaxis: {
      categories: ['Station name Dummy 1', 'Station name Dummy 1', 'Station name Dummy 1', 'Station name Dummy 1', 'Station name Dummy 1'],
      title: {
        style: {
          color: '#f5f7ff',
        },
      },
      axisBorder: {
        show: true,
        color: '#55596e',
      },
      axisTicks: {
        show: false,
        color: '#55596e',
      },
      labels: {
        style: {
          colors: '#000',
        },
      },
    },
    yaxis: {
      title: {
        text: '',
        style: {
          color: '#FFFFF',
        },
      },
      axisBorder: {
        color: '#55596e',
        show: true,
      },
      axisTicks: {
        color: '#55596e',
        show: true,
      },
      labels: {
        style: {
          colors: '#000',
        },
      },
      
    },
  };
  
  const barChart = new ApexCharts(
    document.querySelector('#bar-chart'),
    barChartOptions
  );
  barChart.render();
}
}