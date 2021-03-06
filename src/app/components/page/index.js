const React = require('react');
const PropTypes = require('prop-types');
const Footer = require('./components/footer');
const Menu = require('./components/menu');
const Analytics = require('../analytics');

class Page extends React.Component {
  componentDidMount() {
    Analytics.pageview(window.location.pathname);
  }

  render() {
    const {children, pageName, selectedSubSection} = this.props;
    return (
      <React.Fragment>
        <main>
          <div id="main-content">
            <Menu selectedPage={pageName} selectedSubSection={selectedSubSection} />
            <div id="page-content">
              {children}
            </div>
          </div>
        </main>
        <Footer/>
      </React.Fragment>
    );
  }
}

Page.propTypes = {
  children: PropTypes.node,
  pageName: PropTypes.string.isRequired,
  selectedSubSection: PropTypes.string,
};

module.exports = Page;

