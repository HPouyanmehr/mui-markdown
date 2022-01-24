const hexToRgb = (hexCode: string) => {
  let hex = hexCode;
  hex = hex.replaceAll('#', '');

  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }

  var rgbColor = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return rgbColor
    ? {
        r: parseInt(rgbColor[1], 16),
        g: parseInt(rgbColor[2], 16),
        b: parseInt(rgbColor[3], 16),
      }
    : null;
};

export default hexToRgb;
