const React = require('react');
const AsyncSelect = require('react-select/async').default;
const axios = require('axios');

class EntitySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {options: []};
    }

    componentDidMount() {
        axios.get('/api/db/default-search-list').then(response => {
            this.setState({options: response.data})
        })
    }

    static onInputSearch(searchInput) {
        if (searchInput.trim().length < 2) {
            return Promise.resolve([])
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
                return response.data
            })
    }

    render() {
        const {value, onChange} = this.props;
        return (
            <AsyncSelect
                placeholder="Dependencias del presupuesto"
                value={value}
                onChange={onChange}
                defaultOptions={this.state.options}
                loadOptions={EntitySelect.onInputSearch}
                isSearchable
                className="monitor-config-bar-entities-select"
                cacheOptions
                isMulti
                closeMenuOnSelect={false}
                styles={{
                    valueContainer: provided => ({ ...provided, flexWrap: 'nowrap'})
                }}
            />
        )
    }
}

module.exports = EntitySelect;
