/**
 * Dashboard Analytics
 */

'use strict';

(function () {
  let cardColor, labelColor, borderColor, chartBgColor, bodyColor;

  cardColor = config.colors.cardColor;
  labelColor = config.colors.textMuted;
  borderColor = config.colors.borderColor;
  chartBgColor = config.colors.chartBgColor;
  bodyColor = config.colors.bodyColor;

  // Weekly Overview Line Chart
  // --------------------------------------------------------------------
  const weeklyOverviewChartEl = document.querySelector('#weeklyOverviewChart'),
    weeklyOverviewChartConfig = {
      chart: {
        type: 'bar',
        height: 200,
        offsetY: -9,
        offsetX: -16,
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      series: [
        {
          name: 'Sales',
          data: [32, 55, 45, 75, 55, 35, 70]
        }
      ],
      colors: [chartBgColor],
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '30%',
          endingShape: 'rounded',
          startingShape: 'rounded',
          colors: {
            ranges: [
              {
                from: 75,
                to: 80,
                color: config.colors.primary
              },
              {
                from: 0,
                to: 73,
                color: chartBgColor
              }
            ]
          }
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        strokeDashArray: 8,
        borderColor,
        padding: {
          bottom: -10
        }
      },
      xaxis: {
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        tickPlacement: 'on',
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      yaxis: {
        min: 0,
        max: 90,
        show: true,
        tickAmount: 3,
        labels: {
          formatter: function (val) {
            return parseInt(val) + 'K';
          },
          style: {
            fontSize: '0.75rem',
            fontFamily: 'Inter',
            colors: labelColor
          }
        }
      },
      states: {
        hover: {
          filter: {
            type: 'none'
          }
        },
        active: {
          filter: {
            type: 'none'
          }
        }
      },
      responsive: [
        {
          breakpoint: 1500,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '40%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '30%'
              }
            }
          }
        },
        {
          breakpoint: 815,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 5
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 10,
                columnWidth: '20%'
              }
            }
          }
        },
        {
          breakpoint: 568,
          options: {
            plotOptions: {
              bar: {
                borderRadius: 8,
                columnWidth: '30%'
              }
            }
          }
        },
        {
          breakpoint: 410,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '50%'
              }
            }
          }
        }
      ]
    };
  if (typeof weeklyOverviewChartEl !== undefined && weeklyOverviewChartEl !== null) {
    const weeklyOverviewChart = new ApexCharts(weeklyOverviewChartEl, weeklyOverviewChartConfig);
    weeklyOverviewChart.render();
  }

  // Total Profit line chart
  // --------------------------------------------------------------------
  const totalProfitLineChartEl = document.querySelector('#totalProfitLineChart'),
    totalProfitLineChartConfig = {
      chart: {
        height: 90,
        type: 'line',
        parentHeightOffset: 0,
        toolbar: {
          show: false
        }
      },
      grid: {
        borderColor: labelColor,
        strokeDashArray: 6,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        },
        padding: {
          top: -15,
          left: -7,
          right: 9,
          bottom: -15
        }
      },
      colors: [config.colors.primary],
      stroke: {
        width: 3
      },
      series: [
        {
          data: [0, 20, 5, 30, 15, 45]
        }
      ],
      tooltip: {
        shared: false,
        intersect: true,
        x: {
          show: false
        }
      },
      xaxis: {
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      tooltip: {
        enabled: false
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        strokeColors: 'transparent',
        strokeWidth: 3,
        colors: ['transparent'],
        discrete: [
          {
            seriesIndex: 0,
            dataPointIndex: 5,
            fillColor: cardColor,
            strokeColor: config.colors.primary,
            size: 6,
            shape: 'circle'
          }
        ],
        hover: {
          size: 7
        }
      },
      responsive: [
        {
          breakpoint: 1350,
          options: {
            chart: {
              height: 80
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 100
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 110
            }
          }
        }
      ]
    };
  if (typeof totalProfitLineChartEl !== undefined && totalProfitLineChartEl !== null) {
    const totalProfitLineChart = new ApexCharts(totalProfitLineChartEl, totalProfitLineChartConfig);
    totalProfitLineChart.render();
  }

  // Sessions Column Chart
  // --------------------------------------------------------------------
  const sessionsColumnChartEl = document.querySelector('#sessionsColumnChart'),
    sessionsColumnChartConfig = {
      chart: {
        height: 90,
        parentHeightOffset: 0,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      tooltip: {
        enabled: false
      },
      plotOptions: {
        bar: {
          barHeight: '100%',
          columnWidth: '20px',
          startingShape: 'rounded',
          endingShape: 'rounded',
          borderRadius: 4,
          colors: {
            ranges: [
              {
                from: 25,
                to: 32,
                color: config.colors.danger
              },
              {
                from: 60,
                to: 75,
                color: config.colors.primary
              },
              {
                from: 45,
                to: 50,
                color: config.colors.danger
              },
              {
                from: 35,
                to: 42,
                color: config.colors.primary
              }
            ],
            backgroundBarColors: [chartBgColor, chartBgColor, chartBgColor, chartBgColor, chartBgColor],
            backgroundBarRadius: 4
          }
        }
      },
      grid: {
        show: false,
        padding: {
          top: -10,
          left: -10,
          bottom: -15
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        labels: {
          show: false
        },
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        labels: {
          show: false
        }
      },
      series: [
        {
          data: [30, 70, 50, 40, 60]
        }
      ],
      responsive: [
        {
          breakpoint: 1350,
          options: {
            chart: {
              height: 80
            },
            plotOptions: {
              bar: {
                columnWidth: '40%'
              }
            }
          }
        },
        {
          breakpoint: 1200,
          options: {
            chart: {
              height: 100
            },
            plotOptions: {
              bar: {
                columnWidth: '20%'
              }
            }
          }
        },
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 110
            },
            plotOptions: {
              bar: {
                columnWidth: '10%'
              }
            }
          }
        },
        {
          breakpoint: 480,
          options: {
            plotOptions: {
              bar: {
                columnWidth: '20%'
              }
            }
          }
        }
      ]
    };
  if (typeof sessionsColumnChartEl !== undefined && sessionsColumnChartEl !== null) {
    const sessionsColumnChart = new ApexCharts(sessionsColumnChartEl, sessionsColumnChartConfig);
    sessionsColumnChart.render();
  }
})();
