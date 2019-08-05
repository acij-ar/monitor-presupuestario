const React = require('react');
const Select = require('react-select').default;

class EntitySelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {options: []};
        this.loadOptions();
    }

    loadOptions() {
        console.log('loading');
    }

    render() {
        const {value, onChange} = this.props;
        return (
            <Select
                placeholder="Dependencias del presupuesto"
                value={value}
                onChange={onChange}
                isSearchable
                className="monitor-config-bar-entities-select"
                cacheOptions
            />
        )
    }
}

module.exports = EntitySelect;
