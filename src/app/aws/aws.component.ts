import { Component } from '@angular/core';
import { ILoadedEventArgs, GaugeTheme } from '@syncfusion/ej2-angular-circulargauge';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.css']
})
export class AwsComponent {

  public chartData: any;
  public pointersData: any;

  public filterChartData: any;
  public filterPointersData: any;


  title = "poor";

  public ticks: Object = {
      width: 0
  };

  public lineStyle: Object = {
      width: 0
  };

  public labelStyle: Object = {
      font: {
          size: '0px'
      },
      offset: -5
  };

  public textStyle: Object = {
      size: '15px', fontFamily: 'inherit'
  };

  public cap: Object = {
      radius: 0
  };

  public animation: Object = {
      enable: true
  };

  public load(args: ILoadedEventArgs): void {
      // custom code start
      let selectedTheme: string = location.hash.split('/')[1];
      selectedTheme = selectedTheme ? selectedTheme : 'Material';
      args.gauge.theme = <GaugeTheme>(selectedTheme.charAt(0).toUpperCase() +
      selectedTheme.slice(1)).replace(/-dark/i, 'Dark').replace(/contrast/i, 'Contrast');
      // custom code end
  }
  // private chartService: ChartService
  constructor() {

    // this.chartService.getChartData().subscribe((data) => {
    //   console.log(data);
    // }
    // );
      
    this.pointersData = [
        {
          "title": 'Poor',
          "value": 12,
          "start":10,
          "end":20,
          "type": "Hyperscaler - AWS"
        },
        {
          "title": 'Good',
          "value": 30,
          "start":40.5,
          "end":60,
          // "type": "Fresher Pyramid"
        },
        {
          "title": 'Average',
          "value": 50,
          "start":40.5,
          "end":60,
          // "type": "Actual"
        },
        {
          "title": 'Great',
          "value": 75,
          "start":60.5,
          "end":90,
          // "type": "TRIO Budget vs Actual"
        },
        {
          "title": 'Excellent',
          "value": 100,
          "start":90.5,
          // "end":120,
          // "type": "Hyperscaler - AWS"
        },
        // {
        //   "title": 'Good',
        //   "value": 30,
        //   "start":40.5,
        //   "end":60,
        //   // "type": "Attrition"
        // },
      ];

      this.chartData = [
        {
          "title": '',
          "value": 20,
          "start":10,
          "end":20
        },
        // {
        //   "title": '',
        //   "value": 90,
        //   "start":10,
        //   "end":20
        // },
        // {
        //   "title": '',
        //   "value": 40,
        //   "start":10,
        //   "end":20
        // },
        // {
        //   "title": '',
        //   "value": 70,
        //   "start":10,
        //   "end":20
        // },
        // {
        //   "title": '',
        //   "value": 50,
        //   "start":10,
        //   "end":20
        // },
        // {
        //   "title": '',
        //   "value": 40,
        //   "start":10,
        //   "end":20
        // }

      ];

      
    this.filterChartData = this.chartData;
    this.filterPointersData  = this.pointersData;
  };

  search(e: any) {
    if (e.target.value != '') {
      this.filterPointersData = this.pointersData.filter((pointer: any) =>
        pointer.type.toLowerCase().includes(e.target.value) ||
        pointer.type.startsWith(e.target.value));
    } else {
      this.filterPointersData = this.pointersData;
    }
  }
 


}
