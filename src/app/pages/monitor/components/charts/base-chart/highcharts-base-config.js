module.exports = {
  chart: {
    events: {
      redraw: function () {
        const isTreemap = this.series && this.series[0] && this.series[0].type === 'treemap';
        if (isTreemap) {
          const titleParts = this.series[0].name.split('-');
          const titleSuffix = titleParts.pop();
          const entityName = this.series[0].nodeMap[this.series[0].rootNode].name || titleParts.join('');
          console.log(entityName);
          this.setTitle({text: `${entityName} - ${titleSuffix}`});
        }
      },
      load: function () {
        if (this.options.chart.forExport) {
          this.renderer.image('http://monitorpresupuestario.acij.org.ar/static/logo.png', 10, 10, 120, 40)
            .add();
        }
      }
    }
  },
};
