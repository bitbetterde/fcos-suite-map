export function generateRandomHslColor(saturation = 100, lightness = 50, distinctValues = 20): string {
  const randomColorIndex = getRandomIntInclusive(0, distinctValues);
  const color = `hsl(${Math.floor(randomColorIndex * (360 / distinctValues))},${saturation}%,${lightness}%)`;
  return color;
}

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
