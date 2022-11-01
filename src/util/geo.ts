const getSWCoordinates = (coordinatesCollection: [number, number][]): [number, number] => {
  const lowestLng = Math.min(...coordinatesCollection.map((coordinates) => coordinates[0]));
  const lowestLat = Math.min(...coordinatesCollection.map((coordinates) => coordinates[1]));

  return [lowestLng, lowestLat];
};

const getNECoordinates = (coordinatesCollection: [number, number][]): [number, number] => {
  const highestLng = Math.max(...coordinatesCollection.map((coordinates) => coordinates[0]));
  const highestLat = Math.max(...coordinatesCollection.map((coordinates) => coordinates[1]));

  return [highestLng, highestLat];
};

export const calcBoundsFromCoordinates = (
  coordinatesCollection: [number, number][],
): [[number, number], [number, number]] => {
  return [getSWCoordinates(coordinatesCollection), getNECoordinates(coordinatesCollection)];
};
