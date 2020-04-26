import { Component, OnDestroy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";

@Component({
  selector: "ngx-chartjs-pie",
  template: ` <chart type="pie" [data]="data" [options]="options"></chart> `,
})
export class ChartjsPieComponent implements OnDestroy {
  data: any;
  options: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors: any = config.variables;
      const chartjs: any = config.variables.chartjs;

      this.data = {
        labels: ["Artes y Humanidades", "Ciencias", "Ingeniería"],
        datasets: [
          {
            data: [300, 500, 100],
            backgroundColor: [
              "#FF9E2F",
              "#FF6385",
              "#44B7FF",
            ],
          },
        ],
      };

      this.options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          xAxes: [
            {
              display: false,
            },
          ],
          yAxes: [
            {
              display: false,
            },
          ],
        },
        legend: {
          labels: {
            fontColor: chartjs.textColor,
          },
        },
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
