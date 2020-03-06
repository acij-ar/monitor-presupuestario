const React = require('react');
const PropTypes = require('prop-types');
const Header = require('./components/header');
const Footer = require('./components/footer');
const Analytics = require('../analytics');

class Page extends React.Component {
  componentDidMount() {
    Analytics.pageview(window.location.pathname);
  }

  render() {
    const {children} = this.props;
    return (
      <React.Fragment>
        <Header key="header"/>
        <div id="main" key="main">
          {children}
        </div>
        <Footer key="footer"/>
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
};

module.exports = Page;

