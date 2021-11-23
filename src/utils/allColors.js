import Color from 'ac-colors';
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

const generateLABColorPalette = color => {
  const colorPalette = {};
  const [l, a, b] = color._lab;
  let colors = [...Array(10)].map((_, i) => {
    return { l: (l + i * 10) % 100, a, b };
  });

  colors = orderBy(colors, ['l'], ['desc']);
  colors.forEach((item, index) => {
    colorPalette[COLOR_GRADUATIONS[index]] = new Color({
      color: [item.l, item.a, item.b],
      type: 'lab',
    })._hex;
  });

  return colorPalette;
};

const generateRGBColorPalette = color => {
  const colorPalette = {};
  const [r, g, b] = color._rgb;
  let colors = [...Array(10)].map((_, i) => {
    return { r: (r + i * 25) % 255, g: (g + i * 25) % 255, b: (b + i * 25) % 255 };
  });

  colors = orderBy(colors, ['r'], ['desc']);
  colors.forEach((item, index) => {
    colorPalette[COLOR_GRADUATIONS[index]] = new Color({
      color: [item.r, item.g, item.b],
      type: 'rgb',
    })._hex;
  });

  return colorPalette;
};

const generateLCHABColorPalette = color => {
  const colorPalette = {};
  const [l, a, b] = color._lchab;
  let colors = [...Array(10)].map((_, i) => {
    return { l: (l + i * 10) % 100, a, b };
  });

  colors = orderBy(colors, ['l'], ['desc']);
  colors.forEach((item, index) => {
    colorPalette[COLOR_GRADUATIONS[index]] = new Color({
      color: [item.l, item.a, item.b],
      type: 'lchab',
    })._hex;
  });

  return colorPalette;
};

const generateLCHUVColorPalette = color => {
  const colorPalette = {};
  const [l, a, b] = color._lchuv;
  let colors = [...Array(10)].map((_, i) => {
    return { l: (l + i * 10) % 100, a, b };
  });

  colors = orderBy(colors, ['l'], ['desc']);
  colors.forEach((item, index) => {
    colorPalette[COLOR_GRADUATIONS[index]] = new Color({
      color: [item.l, item.a, item.b],
      type: 'lchuv',
    })._hex;
  });

  return colorPalette;
};

const generateLUVColorPalette = color => {
  const colorPalette = {};
  const [l, a, b] = color._luv;

  let colors = [...Array(10)].map((_, i) => {
    return { l: (l + i * 10) % 100, a, b };
  });

  colors = orderBy(colors, ['l'], ['desc']);
  colors.forEach((item, index) => {
    colorPalette[COLOR_GRADUATIONS[index]] = new Color({
      color: [item.l, item.a, item.b],
      type: 'luv',
    })._hex;
  });

  return colorPalette;
};

const generateXYZColorPalette = color => {
  const colorPalette = {};
  const [l, a, b] = color._xyz;
  let colors = [...Array(10)].map((_, i) => {
    return {
      l: (l + i * 9.505) % 95.05,
      a: (a + i * 10) % 100,
      b: (b + i * 10.89) % 108.9,
      total:
        ((l + i * 9.505) % 95.05) +
        ((a + i * 10) % 100) +
        ((b + i * 10.889999999999999) % 108.89999999999999),
    };
  });

  colors = orderBy(colors, ['total'], ['desc']);
  colors.forEach((item, index) => {
    colorPalette[COLOR_GRADUATIONS[index]] = new Color({
      color: [item.l, item.a, item.b],
      type: 'xyz',
    })._hex;
  });

  return colorPalette;
};

export const generateAllColors = hexColor => {
  const colorPalettes = [];
  let color = new Color({ color: hexColor, type: 'hex' });
  let white = new Color({ color: '#ffffff', type: 'hex' });
  console.log({ white });

  colorPalettes.push(generateLABColorPalette(color));
  colorPalettes.push(generateRGBColorPalette(color));
  colorPalettes.push(generateLCHABColorPalette(color));
  colorPalettes.push(generateLCHUVColorPalette(color));
  colorPalettes.push(generateLUVColorPalette(color));
  colorPalettes.push(generateXYZColorPalette(color));
  return colorPalettes;
};
