import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-hourly-sales',
  templateUrl: './hourly-sales.component.html',
  styleUrls: ['./hourly-sales.component.css']
})
export class HourlySalesComponent implements OnInit {
  ngOnInit(): void {
   this.createSpiderCharts()
  }
  createSpiderCharts(){
    const options = {
      series: [{
      data: [85, 90, 120, 70, 75, 80,100, 80, 60,80,90,85],
    }, {
      data: [88, 110, 50, 45, 55, 70,75, 90, 120,80,90,85],
    }, ],
      chart: {
      height: 300,
      width:300,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1
      }
    },
    colors: ['#009ACF33', '#009ACF'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      labels: {
        colors: '#f5f7ff',
      },
      show: false,
      position: 'top',
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
    },
    xaxis: {
      categories: ['24:00', '02:00', '04:00', '06:00', '08:00', '10:00','12:00', '14:00', '16:00', '18:00' ,"20:00","22:00"]
    }
    };
  
    const chart = new ApexCharts(document.querySelector("#areas-chart"), options);
    chart.render();
  }
}
