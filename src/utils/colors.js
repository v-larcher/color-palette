import { orderBy } from 'lodash';

const COLOR_GRADUATIONS = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
];

const hexToHsl = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (!result) {
    return null;
  }

  const [red, green, blue] = result
    .splice(1, 3)
    .map(primaryColorStr => parseInt(primaryColorStr, 16) / 255);

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  let hue = 0;
  let saturation = 0;
  const lightness = (max + min) / 2;

  if (max !== min) {
    const difference = max - min;
    saturation =
      lightness > 0.5 ? difference / (2 - max - min) : difference / (max + min);
    switch (max) {
      case red:
        hue = (green - blue) / difference + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / difference + 2;
        break;
      case blue:
        hue = (red - green) / difference + 4;
        break;
    }
    hue /= 6;
  }

  return [
    Math.round(hue * 360),
    Math.round(saturation * 100),
    Math.round(lightness * 100),
  ];
};

const hslToHex = ({ hue, saturation, lightness }) => {
  lightness /= 100;
  const a = (saturation * Math.min(lightness, 1 - lightness)) / 100;
  const getPrimaryColor = n => {
    const k = (n + hue / 30) % 12;
    const color = lightness - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${getPrimaryColor(0)}${getPrimaryColor(8)}${getPrimaryColor(4)}`;
};

export const generateColors = hexColor => {
  const colorPalette = {};
  const hslColor = hexToHsl(hexColor);

  if (hslColor) {
    const [hue, saturation, lightness] = hslColor;
    let colors = [...Array(10)].map((_, i) => {
      return { hue, saturation, lightness: (lightness + i * 10) % 100 };
    });

    colors = orderBy(colors, ['lightness'], ['desc']);
    colors.forEach((item, index) => {
      colorPalette[COLOR_GRADUATIONS[index]] = hslToHex(item);
    });
  }

  return colorPalette;
};
