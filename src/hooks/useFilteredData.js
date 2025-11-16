import dataset from "../data/rspData.json";
import { calculateMonthlyAverage } from "../utils/calculateMonthlyAverage";
import { getMonth } from "../utils/getMonth";
export function useFilteredData(city, fuel, year) {
    const records = dataset;
    const filtered = records.filter(d => d.city.trim() === city &&
        d.fuel.trim() === fuel &&
        d.date.startsWith(year));
    const monthGroups = {};
    filtered.forEach(record => {
        const month = getMonth(record.date); // "May"
        if (!monthGroups[month])
            monthGroups[month] = [];
        monthGroups[month].push(record);
    });
    const months = Object.keys(monthGroups);
    const averages = months.map(m => calculateMonthlyAverage(monthGroups[m]));
    return { months, averages };
}
