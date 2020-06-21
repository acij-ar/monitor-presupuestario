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
  subtitle : null,
  series: [{
    type: "sunburst",
    data,
    allowDrillToNode: true,
    cursor: 'pointer',
    dataLabels: {
      format: '{point.label}',
      rotationMode: 'circular'
    },
    levels: [{
      level: 1,
      color: "transparent"
    },
      {
        level:2,
        color : "#b8cdca",

      },
      {
        level:3,
        color : "#e46e6e",

      }]

  }],
  tooltip: {
    headerFormat: "",
    pointFormat: '{point.name}: <b>{point.value}M</b>'
  }
});
