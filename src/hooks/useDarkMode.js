import React, { useEffect } from "react";

import { useLocalStorage } from "./useLocalStorage";

export function useDarkMode(initialValue = false) {
	const [dark, setDark] = useLocalStorage("dark", initialValue);

	useEffect(() => {
		if (dark === true) {
			document.querySelector("body").classList.add("dark-mode");
		} else {
			document.querySelector("body").classList.remove("dark-mode");
		}
	}, [dark]);

	return [dark, setDark];
}
