const Jimp = require('jimp');

async function generateLogos() {
  try {
    const baseLogoPath = './public/static/img/user_logo.png';
    const image = await Jimp.read(baseLogoPath);

    console.log('Generating Light Version (for dark UI)...');
    const lightLogo = image.clone();
    // Increase brightness & contrast for dark mode popup
    lightLogo.brightness(0.2).contrast(0.2); 
    await lightLogo.writeAsync('./public/logo-light.png');

    console.log('Generating Dark Version (for light backgrounds)...');
    const darkLogo = image.clone();
    // Decrease brightness for light mode
    darkLogo.brightness(-0.2).contrast(0.3);
    await darkLogo.writeAsync('./public/logo-dark.png');

    console.log('Generating Favicons & Apple Touch...');
    // Create an "L" monogram for the favicon if we had canvas, but instead we will 
    // crop/resize the center of the logo to ensure high contrast at 32x32.
    const iconBase = image.clone().background(0xFFFFFFFF);
    
    // Resize down to standard dimensions
    const fav16 = iconBase.clone().resize(16, 16, Jimp.RESIZE_BICUBIC);
    const fav32 = iconBase.clone().resize(32, 32, Jimp.RESIZE_BICUBIC);
    const appleTouch = iconBase.clone().resize(180, 180, Jimp.RESIZE_BICUBIC);

    await fav16.writeAsync('./public/favicon-16x16.png');
    await fav32.writeAsync('./public/favicon-32x32.png');
    await appleTouch.writeAsync('./public/apple-touch-icon.png');

    console.log('Logo variants successfully generated!');
  } catch (err) {
    console.error('Error generating logos:', err);
  }
}

generateLogos();
