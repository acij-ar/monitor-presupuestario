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

  static getDerivedStateFromProps(props, state) {
    const newState = {
      nonGroupedItems: [],
      firstGroupItems: [],
      secondGroupItems: [],
    };
    state.nonGroupedItems.concat(state.firstGroupItems).concat(state.secondGroupItems).map(item => { item.groupId = null });
    props.selected.map(item => {
      if (state.firstGroupItems.includes(item)) {
        item.groupId = 1;
        newState.firstGroupItems.push(item);
      } else if (state.secondGroupItems.includes(item)) {
        item.groupId = 2;
        newState.secondGroupItems.push(item);
      } else {
        item.groupId = null;
        newState.nonGroupedItems.push(item);
      }
    });
    return newState
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
    this.state.nonGroupedItems.map(item => { item.groupId = null });
    this.state.firstGroupItems.map(item => { item.groupId = 1 });
    this.state.secondGroupItems.map(item => { item.groupId = 2 });
    this.props.onGroupsChange();
    this.setState(this.state);
  };

  render() {
    return (
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
    )
  }
}

module.exports = GroupEntities;
