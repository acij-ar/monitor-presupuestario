const React = require('react');
const AsyncSelect = require('react-select/async').default;
const axios = require('axios');

class EntitySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {options: []};
    }

    componentDidMount() {
        const params = {table: 'jurisdicciones'};
        axios.get('/api/db/search-list', {params}).then(response => {
            this.setState({options: response.data})
        })
    }

    static onInputSearch(searchInput) {
        const params = {q: searchInput};
        return axios.get('/api/db/search', {params}).then(response => response.data)
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
            />
        )
    }
}

module.exports = EntitySelect;
