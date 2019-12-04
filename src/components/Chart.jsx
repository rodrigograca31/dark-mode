import React from "react";
import moment from "moment";
import {
	LineChart,
	Line,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip
} from "recharts";

const Chart = ({ sparklineData, darkMode }) => {
	console.log(sparklineData);

	const formattedData = sparklineData
		.map((price, idx) => {
			// too much data use only every 24 hours value
			if (idx !== sparklineData.length - 1 && idx % 24 === 0) {
				const date = moment(price[0]).format("ddd h:mma");
				return { value: price[1], date };
			}
			return null;
		})
		.filter(data => data);

	return (
		<LineChart width={1100} height={300} data={formattedData}>
			<Line
				type="monotone"
				dataKey="value"
				stroke={darkMode ? "white" : "black"}
			/>
			<CartesianGrid
				stroke={darkMode ? "white" : "black"}
				strokeOpacity="0.2"
				strokeWidth="1"
				strokeDasharray="5 5"
			/>
			<XAxis
				stroke={darkMode ? "white" : "black"}
				dataKey="date"
				interval={3}
			/>
			<YAxis stroke={darkMode ? "white" : "black"} />
			<Tooltip />
		</LineChart>
	);
};

export default Chart;
