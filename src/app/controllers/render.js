const React = require('react');
const Layout = require('../components/layout');
const { renderToString } = require('react-dom/server');

module.exports = (req, res) => {
  const { View, props, assetsName } = res.locals;
  const scripts = [
    res.locals.assetPath(`${assetsName}.js`),
  ];
  const styles = [
    res.locals.assetPath(`page.css`),
    res.locals.assetPath(`${assetsName}.css`),
  ];
  const page = (
    <Layout scripts={scripts} styles={styles} componentProps={props}>
        <View {...props} />
    </Layout>
  );
  const pageContent = `<!doctype html>${renderToString(page)}`;
  res.send(pageContent)
};
