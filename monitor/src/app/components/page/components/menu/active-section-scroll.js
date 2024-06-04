module.exports = (elementSelectors) => {
  const elements = elementSelectors.map(id => [
    document.querySelector(id),
    document.querySelector(`#menu a[href="${id}"]`)
  ]);
  return () => {
    const windowHeightMidPoint = window.innerHeight / 2;
    elements.forEach(([element, menuElement]) => {
      const elementRect = element.getBoundingClientRect();
      const elementInWindow = elementRect.top <= windowHeightMidPoint && elementRect.bottom >= windowHeightMidPoint;
      if (elementInWindow) {
        menuElement.classList.add('active');
      } else {
        menuElement.classList.remove('active');
      }
    });
  };
}
