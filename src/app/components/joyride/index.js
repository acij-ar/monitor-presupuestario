const React = require('react');
const PropTypes = require('prop-types');
const Joyride = require('react-joyride').default;
const cookies = require('browser-cookies');

const { useEffect, useState } = React;

const MonitorJoyride = (props) => {
  const [showJoyride, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1e3)
  }, []);

  return (
    <Joyride
      continuous
      run={showJoyride}
      locale={{ back: 'Anterior', close: 'Cerrar', last: 'Finalizar', next: 'Siguiente', skip: 'Saltar' }}
      steps={props.steps.map(step => ({ ...step, disableBeacon: true }))}
      scrollOffset={200}
      floaterProps={{ disableAnimation: true }}
    />
  )
};

MonitorJoyride.propTypes = {
  steps: PropTypes.array,
}

module.exports = MonitorJoyride;
