module.exports = (svg, width, height) => (
  new Promise((resolve, reject) => {

    let canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext('2d');

    // Set background to white
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, width, height);

    let xml = new XMLSerializer().serializeToString(svg);
    let dataUrl = 'data:image/svg+xml;utf8,' + encodeURIComponent(xml);
    let img = new Image(width, height);

    img.onload = () => {
      ctx.drawImage(img, 0, 0);
      let imageData = canvas.toDataURL('image/png', 1.0);
      resolve(imageData);
    };

    img.onerror = () => reject();

    img.src = dataUrl;
  })
);