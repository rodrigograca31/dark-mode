import { useState, useEffect } from "react";

export function useLocalStorage(key = "", initialValue = null) {
	//  const [count, setCount] = useState(0);

	const [storedValue, setStoredValue] = useState(() => {
		const item = window.localStorage.getItem(key);
		return item ? JSON.parse(item) : initialValue;
	});

	const setValue = value => {
		setStoredValue(value);
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
}
