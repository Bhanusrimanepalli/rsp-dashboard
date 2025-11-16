import data from "../data/rspData.json";
import { FuelRecord } from "../types";

const unique = (arr: string[]) => [...new Set(arr)];

export function getFilterOptions() {
  const records = data as FuelRecord[];

  const cities = unique(records.map(d => d.city.trim()));
  const fuels = unique(records.map(d => d.fuel.trim()));
  const years = unique(records.map(d => d.date.slice(0, 4)));

  return { cities, fuels, years };
}
