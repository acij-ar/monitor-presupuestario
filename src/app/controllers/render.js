const React = require('react');
const Layout = require('../components/layout');
const { renderToString } = require('react-dom/server');

module.exports = (req, res) => {
  const { View, props, scripts, styles } = res.locals;
  const page = (
    <Layout scripts={scripts} styles={styles} componentProps={props}>
        <View {...props} />
    </Layout>
  );
  const pageContent = `<!doctype html>${renderToString(page)}`;
  res.send(pageContent)
};
