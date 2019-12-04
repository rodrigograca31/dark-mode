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

const Chart = ({ sparklineData }) => {
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
			<Line type="monotone" dataKey="value" stroke="#8884d8" />
			<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
			<XAxis dataKey="date" interval={3} />
			<YAxis />
			<Tooltip />
		</LineChart>
	);
};

export default Chart;
