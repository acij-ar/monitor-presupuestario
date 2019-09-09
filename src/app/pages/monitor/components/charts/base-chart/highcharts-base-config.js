module.exports = {
  chart: {
    events: {
      redraw: function () {
        const isTreemap = this.series && this.series[0] && this.series[0].type === 'treemap';
        if (isTreemap) {
          const entityName = this.series[0].nodeMap[this.series[0].rootNode].name || 'Presupuesto total';
          const titleSuffix = this.series[0].name;
          this.setTitle({ text: `${entityName} - ${titleSuffix}` });
        }
      }
    }
  },
};
