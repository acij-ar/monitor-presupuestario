module.exports = (chartData) => {
  const header = [];
  const rows = [];
  if (chartData) {
    const navigateNodes = (node, rowSoFar={}) => {
      if (header.indexOf(node.key) === -1) {
        header.push(node.key)
      }
      rowSoFar[node.key] = node.name;
      rows.push(rowSoFar);
      node.children.map(child => navigateNodes(child, {...rowSoFar}))
    }
    navigateNodes(chartData.children[0]);
  }
  return [rows, {header}]
};
