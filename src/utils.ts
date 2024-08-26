// src/utils.ts

/**
 * Checks if a number is even.
 * @param num - The number to check.
 * @returns True if the number is even, otherwise false.
 */
export function isEven(num: number): boolean {
  return num % 2 === 0;
}

/**
 * Formats a Date object into a string in YYYY-MM-DD format.
 * @param date - The date to format.
 * @returns The formatted date string.
 */
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Sums all numbers in an array.
 * @param numbers - The array of numbers to sum.
 * @returns The sum of the numbers.
 */
export function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
