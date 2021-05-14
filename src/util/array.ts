export function removeDuplicateObjects<T>(arr: T[], key: keyof T) {
  const tagMap = new Map(arr.map((item: T) => [item[key], item]));
  return [...tagMap.values()];
}
