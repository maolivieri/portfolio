export function shiftArray<T>(arr: T[], number: number): T[] {
  const firstN = arr.slice(0, number);
  const remaining = arr.slice(number);
  return remaining.concat(firstN);
}