import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ coinData }) => {
	const [darkMode, setDarkMode] = useDarkMode(false);
	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className="navbar">
			<h1>
				<Link to="/">Crypto Tracker</Link>
			</h1>

			<div class="cryptos">
				{coinData.map(coin => (
					<NavLink to={`/${coin.symbol}`}>{coin.symbol}</NavLink>
				))}
			</div>

			<div className="dark-mode__toggle" onClick={toggleMode}>
				<div className={darkMode ? "toggle toggled" : "toggle"} />
			</div>
		</nav>
	);
};

export default Navbar;
