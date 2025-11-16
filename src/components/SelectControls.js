import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Select } from "@mantine/core";
import { getFilterOptions } from "../utils/getFilterOptions";
export default function SelectControls({ city, fuel, year, onCityChange, onFuelChange, onYearChange, }) {
    const { cities, fuels, years } = getFilterOptions();
    return (_jsxs("div", { style: { display: "grid", gap: 12 }, children: [_jsx(Select, { label: "City", value: city, onChange: (v) => onCityChange(v), data: cities }), _jsx(Select, { label: "Fuel", value: fuel, onChange: (v) => onFuelChange(v), data: fuels }), _jsx(Select, { label: "Year", value: year, onChange: (v) => onYearChange(v), data: years })] }));
}
