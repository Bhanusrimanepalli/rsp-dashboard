import { FuelRecord } from "../types";

export function calculateMonthlyAverage(records: FuelRecord[]): number {
  if (!records || records.length === 0) return 0;

  const list = records.map(r => Number(r.rsp) || 0);
  const sum = list.reduce((a, b) => a + b, 0);
  return Number((sum / list.length).toFixed(2));
}
