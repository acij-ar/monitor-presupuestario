const React = require('react');
const { List, AutoSizer, CellMeasurer, CellMeasurerCache } = require('react-virtualized');
const PropTypes = require('prop-types');

const VirtualizedMenu = (props) => {
  const { options, children, maxHeight } = props;

  const cache = new CellMeasurerCache({
    defaultHeight: 60,
    fixedWidth: true
  });

  const rowRenderer = ({ index, key, parent, style }) => {
    return (
      <CellMeasurer
        cache={cache}
        columnIndex={0}
        key={key}
        parent={parent}
        rowIndex={index}
      >
        <div style={style}>{children[index]}</div>
      </CellMeasurer>
    );
  }
  return (
    <AutoSizer>
      {({ width }) => (
        <div className="monitor-virtualized-menu">
          <List
            width={width}
            height={maxHeight}
            rowCount={options.length}
            rowHeight={cache.rowHeight}
            rowRenderer={rowRenderer}
          />
        </div>
      )}
    </AutoSizer>
  )
}

VirtualizedMenu.propTypes = {
  options: PropTypes.array,
  maxHeight: PropTypes.number,
  getValue: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.array,
  ]),
};

module.exports = VirtualizedMenu;
