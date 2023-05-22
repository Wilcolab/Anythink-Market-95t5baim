// create a utility function that takes in the user's information and generates a dataURL of the image.
// you can use first two characters of user's username
// and use them as initials for the avatar.
// Path: backend/utils/getUserAvatar.js.
// the function should return base64 data URL of a randomly generated canvas based on the user's information.

export const getUserAvatar = (username) => {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.font = '100px Arial';
    ctx.fillText(username[0] + username[1], 10, 150);
    return canvas.toDataURL();
    }
