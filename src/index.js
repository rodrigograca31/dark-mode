import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.scss";

const App = () => {
	const [coinData, setCoinData] = useState([]);

	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=true"
			)
			.then(res => setCoinData(res.data))
			.catch(err => console.log(err));
	}, []);
	return (
		<div className="App">
			<Navbar coinData={coinData} />
			{/* <Switch> */}
			{/* <Route path="/">
					<h1>All Coins:</h1>
					<Charts coinData={coinData} />
				</Route> */}

			{coinData.map(coin => (
				<Route exact path={`/${coin.symbol}`}>
					<Charts coin={coin} />
				</Route>
			))}
			{/* </Switch> */}
		</div>
	);
};

const rootElement = document.getElementById("root");
ReactDOM.render(
	<Router>
		<App />
	</Router>,
	rootElement
);
