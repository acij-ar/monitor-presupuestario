const svg2png = require('./svg-to-png');

module.exports = (selector) => {
    const svg = document.querySelector(selector);
    const { width, height } = svg.getBoundingClientRect();
    svg2png(svg, width, height).then(imageData => {
        const link = document.createElement('a');
        link.href = imageData.replace("image/png", "image/octet-stream");
        link.target = '_blank';
        link.download = "treemap.png";
        link.click();
    });
};
