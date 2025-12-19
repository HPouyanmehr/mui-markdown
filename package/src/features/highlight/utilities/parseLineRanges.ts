/**
 * Parses a string of line ranges and returns an array of line numbers
 * Examples:
 * - "1,3,5" => [1, 3, 5]
 * - "1-3,5" => [1, 2, 3, 5]
 * - "1-3,5-7" => [1, 2, 3, 5, 6, 7]
 */
export const parseLineRanges = (rangeString: string): number[] => {
  const regex = /^[0-9,\-\s]+$/;

  if (!regex.test(rangeString)) {
    return [];
  }

  const lines: number[] = [];
  const stringArray = rangeString.split(',');

  for (const strValue of stringArray) {
    const value = strValue.trim();

    if (value) {
      if (value.includes('-')) {
        const [start, end] = value.split('-');
        const startNum = parseInt(start, 10);
        const endNum = parseInt(end, 10);

        for (let number = startNum; number <= endNum; number++) {
          lines.push(number);
        }
      } else {
        lines.push(parseInt(value, 10));
      }
    }
  }

  // Remove duplicates
  return Array.from(new Set(lines));
};
