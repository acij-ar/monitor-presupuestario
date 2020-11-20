const React = require('react');
const Layout = require('../components/layout');
const { renderToString } = require('react-dom/server');

module.exports = (req, res) => {
  const { View, props, pageName } = res.locals;
  const scripts = [
    res.locals.assetPath(`vendor.js`),
    ...res.locals.getJavascripts().filter(name => name.includes(pageName))
  ];
  const styles = [
    res.locals.assetPath(`vendor.css`),
    res.locals.assetPath(`page.css`),
    ...res.locals.getStylesheets().filter(name => name.includes(pageName)),
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
