import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";

import { useDarkMode } from "./hooks/useDarkMode";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles.scss";

const App = () => {
	const [coinData, setCoinData] = useState([]);
	const [darkMode, setDarkMode] = useDarkMode(false);
	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	useEffect(() => {
		axios
			.get(
				"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
			)
			.then(res => setCoinData(res.data))
			.catch(err => console.log(err));
	}, []);

	return (
		<div className="App">
			<Navbar
				coinData={coinData}
				toggleMode={toggleMode}
				darkMode={darkMode}
			/>
			{/* <Switch> */}
			{/* <Route path="/">
					<h1>All Coins:</h1>
					<Charts coinData={coinData} />
				</Route> */}

			{coinData.map(coin => (
				<Route exact path={`/${coin.symbol}`}>
					<Charts coin={coin} darkMode={darkMode} />
					{/* <Charts /> */}
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
