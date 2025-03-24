export interface Sale {
  date: Date;
  sales: number;
}

export const salesDta: Sale[] = [
  // 2021
  { date: new Date(2021, 0, 10), sales: 2322323 },
  { date: new Date(2021, 5, 15), sales: 72323200 },
  { date: new Date(2021, 8, 20), sales: 800 },
  { date: new Date(2021, 11, 5), sales: 65232320 },

  // 2022
  { date: new Date(2022, 1, 8), sales: 602323230 },
  { date: new Date(2022, 4, 22), sales: 23223 },
  { date: new Date(2022, 7, 10), sales: 23232 },
  { date: new Date(2022, 10, 30), sales: 2323 },

  // 2023
  { date: new Date(2023, 2, 5), sales: 2323 },
  { date: new Date(2023, 5, 18), sales: 6823230 },
  { date: new Date(2023, 8, 25), sales: 7823230 },
  { date: new Date(2023, 11, 12), sales: 7923230 },
  { date: new Date(2023, 11, 12), sales: 7923230 },

  // 2024
  { date: new Date(2024, 1, 15), sales: 232323 },
  { date: new Date(2024, 2, 10), sales: 23 },
  { date: new Date(2024, 3, 5), sales: 600 },
  { date: new Date(2024, 4, 20), sales: 2323 },
  { date: new Date(2024, 5, 25), sales: 800 },
  { date: new Date(2024, 6, 10), sales: 650 },

  { date: new Date(2025, 1, 15), sales: 232323 },
  { date: new Date(2025, 2, 10), sales: 7023230 },
  { date: new Date(2025, 3, 5), sales: 60023 },
  { date: new Date(2025, 4, 20), sales: 232 },
  { date: new Date(2025, 5, 25), sales: 2323 },
  { date: new Date(2025, 6, 10), sales: 2323 },
];