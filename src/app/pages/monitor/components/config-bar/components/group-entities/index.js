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
      firstGroupUnified: false,
      secondGroupItems: [],
      secondGroupUnified: false,
    };

    this.onDragEnd = this.onDragEnd.bind(this);
  }

  static getDerivedStateFromProps(props, oldState) {
    const newState = {
      nonGroupedItems: [],
      firstGroupItems: [],
      firstGroupUnified: oldState.firstGroupUnified,
      secondGroupItems: [],
      secondGroupUnified: oldState.secondGroupUnified
    };
    const itemsOfPreviousState = oldState.nonGroupedItems.concat(oldState.firstGroupItems).concat(oldState.secondGroupItems);
    itemsOfPreviousState.map(item => {
      item.groupId = null;
      item.unified = false;
    });
    props.selected.map(item => {
      if (oldState.firstGroupItems.includes(item)) {
        item.groupId = 1;
        item.unified = oldState.firstGroupUnified;
        newState.firstGroupItems.push(item);
      } else if (oldState.secondGroupItems.includes(item)) {
        item.groupId = 2;
        item.unified = oldState.secondGroupUnified;
        newState.secondGroupItems.push(item);
      } else {
        item.groupId = null;
        newState.nonGroupedItems.push(item);
      }
    });
    return newState
  }

  unifyGroups(shouldBeUnified, group) {
    if (group === 'firstGroupItems') {
      this.state.firstGroupItems.map(item => { item.unified = shouldBeUnified });
      this.state.firstGroupUnified = shouldBeUnified
    } else {
      this.state.secondGroupItems.map(item => { item.unified = shouldBeUnified });
      this.state.secondGroupUnified = shouldBeUnified
    }
    this.props.onGroupsChange();
    this.setState(this.state);
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
                onUnify={e => this.unifyGroups(e.target.checked, 'firstGroupItems')}
              />
              <DragAndDropList
                id="secondGroupItems"
                items={this.state.secondGroupItems}
                direction="vertical"
                className="monitor-config-group-vertical"
                onUnify={e => this.unifyGroups(e.target.checked, 'secondGroupItems')}
              />
            </div>
          </DragDropContext>
        </div>
      </div>
    )
  }
}

module.exports = GroupEntities;
