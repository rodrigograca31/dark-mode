import React, { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(initialValue = false) {
	const [dark, setDark] = useLocalStorage("dark", initialValue);
	console.log("aa");

	useEffect(() => {
		if (dark === true) {
			document.querySelector("body").className = "dark-mode";
		} else {
			document.querySelector("body").className = "";
		}
	}, [dark]);

	return [dark, setDark];
}
