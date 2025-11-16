import { Select } from "@mantine/core";
import { getFilterOptions } from "../utils/getFilterOptions";

interface Props {
  city: string;
  fuel: string;
  year: string;
  onCityChange: (v: string) => void;
  onFuelChange: (v: string) => void;  
  onYearChange: (v: string) => void;
}

export default function SelectControls({
  city,
  fuel,
  year,
  onCityChange,
  onFuelChange,
  onYearChange,
}: Props) {
  const { cities, fuels, years } = getFilterOptions();

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <Select
        label="City"
        value={city}
        onChange={(v) => onCityChange(v!)}
        data={cities}
      />

      <Select
        label="Fuel"
        value={fuel}
        onChange={(v) => onFuelChange(v!)}
        data={fuels}
      />

      <Select
        label="Year"
        value={year}
        onChange={(v) => onYearChange(v!)}
        data={years}
      />
    </div>
  );
}
