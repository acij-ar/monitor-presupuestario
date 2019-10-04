const React = require('react');
const AsyncSelect = require('react-select/async').default;
const axios = require('axios');
const GroupEntitiesTrigger = require('./group-entities/trigger');
const MultiValueContainer = require('./multi-value-container');
const Analytics = require('../../../../../components/analytics');
const PropTypes = require('prop-types');

class EntitySelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {options: []};
    this.onChange = this.onChange.bind(this);
    this.lastSelection = [];
  }

  componentDidMount() {
    axios.get('/api/db/default-search-list').then(response => {
      this.setState({options: response.data});
    });
  }

  static onInputSearch(searchInput) {
    if (searchInput.trim().length < 2) {
      return Promise.resolve([]);
    }
    if (this.cancellationSource) {
      this.cancellationSource.cancel();
    }
    this.cancellationSource = axios.CancelToken.source();
    const cancelToken = this.cancellationSource.token;
    const params = {q: searchInput};
    return axios.get('/api/db/search', {params, cancelToken})
      .then(response => {
        this.cancellationSource = null;
        return response.data;
      });
  }

  trackSelection(selectedEntities) {
    const labels = selectedEntities ? selectedEntities.map(entity => entity.label) : [];
    labels.map(label => {
      if (!this.lastSelection.includes(label)) {
        Analytics.event({
          category: 'Config bar change',
          action: 'Entity selection',
          label,
        });
      }
    });
    this.lastSelection = labels;
  }

  onChange(selectedEntities) {
    this.trackSelection(selectedEntities);
    this.props.onChange(selectedEntities);
  }

  render() {
    const {value} = this.props;
    return (
      <div className="monitor-config-bar-entities-select">
        <AsyncSelect
          placeholder="Dependencias del presupuesto"
          value={value}
          onChange={this.onChange}
          defaultOptions={this.state.options}
          loadOptions={EntitySelect.onInputSearch}
          isSearchable
          cacheOptions
          isMulti
          closeMenuOnSelect={false}
          styles={{
            valueContainer: provided => ({...provided, flexWrap: 'nowrap'}),
            clearIndicator: provided => ({
              ...provided,
              borderLeft: 'solid 1px',
              margin: '8px 0 8px 12px',
              padding: '0 8px',
            }),
          }}
          components={{ MultiValueContainer }}
          getOptionLabel={option => option.label}
          getOptionValue={option => option.id}
        />
        <GroupEntitiesTrigger selected={value} />
      </div>
    );
  }
}

EntitySelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.array,
};

module.exports = EntitySelect;
