import chroma from 'chroma-js';

export function isColorDark(color) {
  const labColor = chroma(color).lab();
  const lightness = labColor[0];
  return lightness <= 50;
}
