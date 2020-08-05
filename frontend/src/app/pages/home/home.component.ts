import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'cggov-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    
  }


  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels = ['2013', '2014', '2015', '2016', '2017', '2018', '2019'];
  public barChartType = 'bar';
  public barChartLegend = true;

  public barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Ações Novas'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Ações Continuadas'}
  ];

  public pieChartLabels = ['TRT 01', 'TRT 02', 'TRT 03', 'TRT 04'];
  public pieChartData = [120, 150, 100, 190];
  public pieChartType = 'pie';




  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

}
