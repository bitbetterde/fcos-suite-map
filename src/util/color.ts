export function generateRandomHslColor(saturation = 100, lightness = 50): string {
  const randomHue = getRandomIntInclusive(0, 360);
  const color = `hsl(${randomHue},${saturation}%,${lightness}%)`;
  return color;
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
