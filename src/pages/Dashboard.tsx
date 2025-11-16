import { useState } from "react";
import SelectControls from "../components/SelectControls";
import Chart from "../components/Chart";
import { useFilteredData } from "../hooks/useFilteredData";

export default function Dashboard() {
  const [city, setCity] = useState("Delhi");
  const [fuel, setFuel] = useState("Petrol");
  const [year, setYear] = useState("2025");

  const { months, averages } = useFilteredData(city, fuel, year);

  return (
    <div className="app-shell">
      <div className="container-md">
        <header className="header">
          <div className="brand">
            <div className="logo">R</div>
            <div>
              <h1>RSP Dashboard</h1>
              <p>Monthly average retail selling price — Petrol & Diesel (Metro Cities)</p>
            </div>
          </div>

          <div className="badges">
            <div className="badge">Data: NDAP</div>
            <div className="badge">Year: {year}</div>
          </div>
        </header>

        <section className="panel">
          <aside className="controls-card">
            <div style={{ fontSize: 13, color: "var(--muted)" }}>Filters</div>
            <SelectControls
              city={city}
              fuel={fuel}
              year={year}
              onCityChange={setCity}
              onFuelChange={setFuel}
              onYearChange={setYear}
            />

            <div style={{ marginTop: "auto", fontSize: 13, color: "var(--muted)" }}>
              Tip: Use filters to update monthly averages.
            </div>
          </aside>

          <main className="chart-card">
            <div className="chart-header">
              <div className="chart-title">
                <h2>Monthly Average RSP</h2>
                <p>
                  {city} • {fuel} • {year}
                </p>
              </div>

              <div className="badges">
                <div className="badge">Unit: INR / L</div>
                <div className="badge">Scale: 1</div>
              </div>
            </div>

            <Chart xData={months} yData={averages} />

            <div style={{ marginTop: 12, color: "var(--muted)", fontSize: 13 }}>
              Monthly averages are computed by averaging all available daily prices for that month. Missing values are treated as 0.
            </div>
          </main>
        </section>
      </div>
    </div>
  );
}
