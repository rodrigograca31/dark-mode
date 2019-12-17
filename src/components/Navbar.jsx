import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ coinData, toggleMode, darkMode }) => {
	return (
		<nav className="navbar">
			<h1>
				<Link to="/">Crypto Tracker</Link>
			</h1>

			<div className="cryptos">
				{coinData.map(coin => (
					<NavLink to={`/${coin.symbol}`} key={coin.symbol}>
						{coin.symbol}
					</NavLink>
				))}
			</div>

			<div className="dark-mode__toggle" onClick={toggleMode}>
				<div className={darkMode ? "toggle toggled" : "toggle"} />
			</div>
		</nav>
	);
};

export default Navbar;
