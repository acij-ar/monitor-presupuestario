const paths = [
  'M 3 3 L 8 3 L 8 8 L 3 8 Z', // squares
  'M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0', // circles
  'M 0 0 L 5 10 L 10 0', // triangles
  'M 2 5 L 5 2 L 8 5 L 5 8 Z', // diamonds
  'M 0 3 L 10 3 M 0 8 L 10 8', // horizontal
  'M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11', // diagonal down
  'M 3 0 L 3 10 M 8 0 L 8 10', // vertical
  'M 0 3 L 5 3 L 5 0 M 5 10 L 5 7 L 10 7', // z?
  'M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9', // diagonal up
  'M 10 3 L 5 3 L 5 0 M 5 10 L 5 7 L 0 7', // inverted z?
];

module.exports = ({pathNumber, strokeColor}) => {
  return {
    pattern: {
      path: paths[pathNumber % paths.length],
      color: strokeColor,
      width: 10,
      height: 10,
    }
  };
};
