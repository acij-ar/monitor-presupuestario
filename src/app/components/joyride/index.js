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
      showSkipButton
      run={showJoyride}
      locale={{ back: 'Anterior', close: 'Cerrar', last: 'Finalizar', next: 'Siguiente', skip: 'Salir' }}
      steps={props.steps.map(step => ({ ...step, disableBeacon: true }))}
      scrollOffset={200}
      floaterProps={{ disableAnimation: true }}
      styles={{
        tooltip: {
          borderRadius: 0,
        },
        buttonBack: {
          outline: 'none',
          borderRadius: 0,
          color: '#0041FF',
        },
        buttonNext: {
          outline: 'none',
          borderRadius: 0,
          backgroundColor: '#0041FF',
        },
        buttonSkip: {
          outline: 'none',
        }
      }}
    />
  )
};

MonitorJoyride.propTypes = {
  steps: PropTypes.array,
}

module.exports = MonitorJoyride;
