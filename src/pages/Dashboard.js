import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import SelectControls from "../components/SelectControls";
import Chart from "../components/Chart";
import { useFilteredData } from "../hooks/useFilteredData";
export default function Dashboard() {
    const [city, setCity] = useState("Delhi");
    const [fuel, setFuel] = useState("Petrol");
    const [year, setYear] = useState("2025");
    const { months, averages } = useFilteredData(city, fuel, year);
    return (_jsx("div", { className: "app-shell", children: _jsxs("div", { className: "container-md", children: [_jsxs("header", { className: "header", children: [_jsxs("div", { className: "brand", children: [_jsx("div", { className: "logo", children: "R" }), _jsxs("div", { children: [_jsx("h1", { children: "RSP Dashboard" }), _jsx("p", { children: "Monthly average retail selling price \u2014 Petrol & Diesel (Metro Cities)" })] })] }), _jsxs("div", { className: "badges", children: [_jsx("div", { className: "badge", children: "Data: NDAP" }), _jsxs("div", { className: "badge", children: ["Year: ", year] })] })] }), _jsxs("section", { className: "panel", children: [_jsxs("aside", { className: "controls-card", children: [_jsx("div", { style: { fontSize: 13, color: "var(--muted)" }, children: "Filters" }), _jsx(SelectControls, { city: city, fuel: fuel, year: year, onCityChange: setCity, onFuelChange: setFuel, onYearChange: setYear }), _jsx("div", { style: { marginTop: "auto", fontSize: 13, color: "var(--muted)" }, children: "Tip: Use filters to update monthly averages." })] }), _jsxs("main", { className: "chart-card", children: [_jsxs("div", { className: "chart-header", children: [_jsxs("div", { className: "chart-title", children: [_jsx("h2", { children: "Monthly Average RSP" }), _jsxs("p", { children: [city, " \u2022 ", fuel, " \u2022 ", year] })] }), _jsxs("div", { className: "badges", children: [_jsx("div", { className: "badge", children: "Unit: INR / L" }), _jsx("div", { className: "badge", children: "Scale: 1" })] })] }), _jsx(Chart, { xData: months, yData: averages }), _jsx("div", { style: { marginTop: 12, color: "var(--muted)", fontSize: 13 }, children: "Monthly averages are computed by averaging all available daily prices for that month. Missing values are treated as 0." })] })] })] }) }));
}
