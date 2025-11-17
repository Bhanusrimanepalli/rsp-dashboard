import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import * as echarts from "echarts";
export default function Chart({ xData, yData }) {
    const ref = useRef(null);
    useEffect(() => {
        if (!ref.current)
            return;
        const chart = echarts.init(ref.current);
        chart.setOption({
            title: { text: "Monthly Average RSP" },
            tooltip: {},
            xAxis: { type: "category", data: xData },
            yAxis: { type: "value" },
            series: [{ type: "bar", data: yData }],
        });
        const resize = () => chart.resize();
        window.addEventListener("resize", resize);
        return () => {
            window.removeEventListener("resize", resize);
            chart.dispose();
        };
    }, [xData, yData]);
    return _jsx("div", { ref: ref, style: { width: "100%", height: "400px" } });
}
