const { createCanvas } = require('canvas');

const getUserAvatar = (username) => {
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');
  
    ctx.fillStyle = 'white'; // Set background color
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Draw background
  
    ctx.font = '60px Impact';
    ctx.fillStyle = 'black';
  
    const text = (username[0] + username[1]).toUpperCase();
    const textWidth = ctx.measureText(text).width; // Get the width of the text
  
    const x = (canvas.width - textWidth) / 2; // Calculate x-coordinate for centering
    const y = (canvas.height + 60) / 2; // Calculate y-coordinate for centering
  
    ctx.fillText(text, x, y); // Draw the text at the center
  
    return canvas.toDataURL();
}
module.exports = { getUserAvatar };


