import React, { useState, useEffect } from "react";
import Chart from "./Chart";
import axios from "axios";

const Charts = ({ coin, darkMode }) => {
	const [coinData, setCoinData] = useState(false);
	const [chartData, setchartData] = useState({ prices: [] });

	useEffect(() => {
		axios
			.get(
				`https://api.coingecko.com/api/v3/coins/${coin.id}?localization=false`
			)
			.then(res => setCoinData(res.data))
			.then(res => {
				axios
					.get(
						`https://api.coingecko.com/api/v3/coins/${coin.id}/market_chart?vs_currency=usd&days=30`
					)
					.then(res => setchartData(res.data));
			})
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="charts">
			{coinData && (
				<div className="chart__container" key={coinData.name}>
					<h2 className="coin__title">{coinData.name}</h2>
					<h4 className="coin__symbol">{coinData.symbol}</h4>
					<div className="coin__logo">
						<img
							src={coinData.image.small}
							height="40"
							alt={coinData.name}
						/>
					</div>
					{coinData && (
						<Chart
							sparklineData={chartData.prices}
							darkMode={darkMode}
						/>
					)}
				</div>
			)}
		</div>
	);
};
export default Charts;
