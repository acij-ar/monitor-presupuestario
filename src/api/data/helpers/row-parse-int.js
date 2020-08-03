module.exports = (row) => {
  ['original', 'vigente', 'devengado', 'budget'].map(key => {
    if (typeof row[key] === 'string') {
      row[key] = parseInt(row[key])
    }
  })
  return row;
}
