// src/utils.ts

export function isEven(num: number): boolean {
  return num % 2 === 0;
}

export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function sumArray(numbers: number[]): number {
  return numbers.reduce((sum, num) => sum + num, 0);
}
