const { createCanvas, loadImage } = require('canvas');

const getUserAvatar = (username) => {
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');

    ctx.font = '30px Impact'
    ctx.rotate(0.1)
    ctx.fillText(username[0] + username[1], 10, 150);

    return canvas.toDataURL();
}

module.exports = { getUserAvatar };
