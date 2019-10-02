const React = require('react');
const Header = require('./components/header');
const Footer = require('./components/footer');
const Analytics = require('../analytics');
require('./index.scss');

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

module.exports = Page;

