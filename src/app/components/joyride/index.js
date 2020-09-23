const React = require('react');
const PropTypes = require('prop-types');
const Joyride = require('react-joyride').default;
const cookies = require('browser-cookies');

const { useEffect, useState } = React;

const MonitorJoyride = (props) => {
  const [showJoyride, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (!cookies.get(props.cookieName)) {
        setShow(true);
        cookies.set(props.cookieName, 'true', { expires: 60 });
      }
    }, 1e3)
  }, []);

  const onTrouEnd = (status) => {
    if (status && status.type === 'tour:end') {
      setShow(false)
    }
  }

  return (
    <React.Fragment>
      <span className="monitor-joyride-trigger" onClick={() => setShow(true)}>
        <span>?</span>
      </span>
      <Joyride
        continuous
        showSkipButton
        run={showJoyride}
        locale={{ back: 'Anterior', close: 'Cerrar', last: 'Finalizar', next: 'Siguiente', skip: 'Salir' }}
        steps={props.steps.map(step => ({ ...step, disableBeacon: true }))}
        scrollOffset={200}
        floaterProps={{ disableAnimation: true }}
        callback={onTrouEnd}
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
          },
          buttonClose: {
            display: 'none',
          },
        }}
      />
    </React.Fragment>
  )
};

MonitorJoyride.propTypes = {
  steps: PropTypes.array.isRequired,
  cookieName: PropTypes.string.isRequired,
}

module.exports = MonitorJoyride;
