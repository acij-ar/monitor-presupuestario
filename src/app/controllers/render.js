const React = require('react');
const Layout = require('../components/layout');
const { renderToString } = require('react-dom/server');

module.exports = (req, res) => {
  const { View, props, pageName } = res.locals;
  const scripts = [
    res.locals.assetPath(`${pageName}.js`),
  ];
  const styles = [
    res.locals.assetPath(`page.css`),
    res.locals.assetPath(`${pageName}.css`),
  ];
  const componentProps = {
    ...props,
    pageName,
  }
  const page = (
    <Layout scripts={scripts} styles={styles} componentProps={componentProps}>
        <View {...componentProps} pageName={pageName} />
    </Layout>
  );
  const pageContent = `<!doctype html>${renderToString(page)}`;
  res.send(pageContent)
};
