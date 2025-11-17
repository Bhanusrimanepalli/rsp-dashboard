import dataset from "../data/rspData.json";
import { FuelRecord } from "../types";
import { calculateMonthlyAverage } from "../utils/calculateMonthlyAverage";
import { getMonth } from "../utils/getMonth";

export function useFilteredData(city: string, fuel: string, year: string) {
  const records = dataset as FuelRecord[];

  const filtered = records.filter(
    d =>
      d.city.trim() === city &&
      d.fuel.trim() === fuel &&
      d.date.startsWith(year)
  );

  const monthGroups: Record<string, FuelRecord[]> = {};

  filtered.forEach(record => {
    const month = getMonth(record.date); 
    if (!monthGroups[month]) monthGroups[month] = [];
    monthGroups[month].push(record);
  });

  const months = Object.keys(monthGroups);

  const averages = months.map(m => calculateMonthlyAverage(monthGroups[m]));

  return { months, averages };
}
