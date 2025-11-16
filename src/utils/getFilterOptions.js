import data from "../data/rspData.json";
const unique = (arr) => [...new Set(arr)];
export function getFilterOptions() {
    const records = data;
    const cities = unique(records.map(d => d.city.trim()));
    const fuels = unique(records.map(d => d.fuel.trim()));
    const years = unique(records.map(d => d.date.slice(0, 4)));
    return { cities, fuels, years };
}
