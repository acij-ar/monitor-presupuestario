module.exports = {
  control: (provided) => ({
    ...provided, background: 'none', borderWidth: '0', paddingRight: '30px',
    boxShadow: 'none',
  }),
  placeholder: (provided) => ({ ...provided, color: 'inherit' }),
  singleValue: (provided) => ({ ...provided, color: 'inherit' }),
  dropdownIndicator: () => ({ display: 'none' }),
  indicatorSeparator: () => ({ display: 'none' }),
}
