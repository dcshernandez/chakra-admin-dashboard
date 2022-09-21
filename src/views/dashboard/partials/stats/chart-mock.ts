export const options = {
  chart: {
    id: 'data',
    toolbar: {
      show: false,
    },
    sparkline: {
      enabled: true,
    },
  },
  grid: {
    show: false,
  },
  colors: ['#7367F0'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth' as 'smooth',
    width: 2.5,
  },
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 0.9,
      opacityFrom: 0.7,
      opacityTo: 0.5,
      stops: [0, 80, 100],
    },
  },

  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  tooltip: {
    enabled: false,
  },
}

export const series = [
  {
    name: 'series-1',
    type: 'line',
    data: [0, 8, 6, 36, 32, 38, 47],
  },
  {
    name: 'series-2',
    type: 'area',
    data: [0, 5, 12, 32, 28, 40, 56],
  },
]
