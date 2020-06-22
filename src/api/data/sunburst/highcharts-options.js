module.exports = (data) => ({
  chart: {
    height: '100%',
    backgroundColor: 'transparent',
  },
  exporting: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  title: null,
  subtitle: null,
  series: [
    {
      type: 'sunburst',
      data,
      allowDrillToNode: true,
      cursor: 'pointer',
      dataLabels: {
        format: '{point.label}',
        rotationMode: 'circular',
      },
      levels: [
        {
          level: 1,
          color: 'transparent',
        },
        {
          level: 2,
          color: '#A94EF6',

        },
        {
          level: 3,
          color: '#00B0AE',
        },
        {
          level: 4,
          color: '#FF00E1',
        },
        {
          level: 5,
          color: '#8200FF',
        },
        {
          level: 6,
          color: '#BB73FF',
        }
      ],
    },
  ],
  tooltip: {
    headerFormat: '',
    pointFormat: '{point.name}: <b>{point.value}M</b>',
  },
});
