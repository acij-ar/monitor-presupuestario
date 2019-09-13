const React = require('react');
const { DragDropContext } = require('react-beautiful-dnd');
const DragAndDropList = require('./drag-and-drop-list');
const { move, reorder } = require('./helpers');

class GroupEntities extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nonGroupedItems: this.props.selected,
      firstGroupItems: [],
      secondGroupItems: [],
    };

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      this.state[source.droppableId] = reorder(
        this.state[source.droppableId],
        source.index,
        destination.index
      );
    } else {
      const result = move(
        this.state[source.droppableId],
        this.state[destination.droppableId],
        source,
        destination
      );
      this.state[source.droppableId] = result[source.droppableId];
      this.state[destination.droppableId] = result[destination.droppableId];
    }
    this.setState(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <input type="checkbox" id="monitor-config-group-entities-switch" />
        <div id="monitor-config-group-entities-container">
          <div id="monitor-config-group-entities-content">
            <DragDropContext onDragEnd={this.onDragEnd}>
              <DragAndDropList
                id="nonGroupedItems"
                items={this.state.nonGroupedItems}
                direction="horizontal"
                className="monitor-config-group-horizontal"
              />
              <div className="monitor-config-group-vertical-container">
                <DragAndDropList
                  id="firstGroupItems"
                  items={this.state.firstGroupItems}
                  direction="vertical"
                  className="monitor-config-group-vertical"
                />
                <DragAndDropList
                  id="secondGroupItems"
                  items={this.state.secondGroupItems}
                  direction="vertical"
                  className="monitor-config-group-vertical"
                />
              </div>
            </DragDropContext>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

module.exports = GroupEntities;
