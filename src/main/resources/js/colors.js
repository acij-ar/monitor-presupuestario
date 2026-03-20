function hexToRgb(hex) {
    hex = hex.replace("#", "");
    let bigint = parseInt(hex, 16);
    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function rgbToHex(r, g, b) {
    return "#" + 
        ((1 << 24) + (r << 16) + (g << 8) + b)
        .toString(16).slice(1).toUpperCase();
}

function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
        h = s = 0; // gris
    } else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, l];
}

function hslToRgb(h, s, l) {
    let r, g, b;
    if (s === 0) {
        r = g = b = l; // gris
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }
        let q = l < 0.5 ? l * (1 + s) : (l + s) - (l * s);
        let p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
    return {
        r: Math.round(r * 255),
        g: Math.round(g * 255),
        b: Math.round(b * 255)
    };
}

function getColor(startHex, endHex, value) {
    let min = 0, max = 10;

    if (value <= min) return startHex;
    if (value >= max) return endHex;

    let startRgb = hexToRgb(startHex);
    let endRgb   = hexToRgb(endHex);

    let startHsl = rgbToHsl(startRgb.r, startRgb.g, startRgb.b);
    let endHsl   = rgbToHsl(endRgb.r, endRgb.g, endRgb.b);

    let ratio = (value - min) / (max - min);

    let h = startHsl[0] + ratio * (endHsl[0] - startHsl[0]);
    let s = startHsl[1] + ratio * (endHsl[1] - startHsl[1]);
    let l = startHsl[2] + ratio * (endHsl[2] - startHsl[2]);

    let resultRgb = hslToRgb(h, s, l);

    return rgbToHex(resultRgb.r, resultRgb.g, resultRgb.b);
}