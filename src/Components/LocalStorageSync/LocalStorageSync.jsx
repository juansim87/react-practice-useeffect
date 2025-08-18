import { useState, useEffect } from "react";

export const LocalStorageSync = () => {
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		const saved = localStorage.getItem("lastInputValue");
		if (saved !== null) {
			setInputValue(saved);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("lastInputValue", inputValue);        
	}, [inputValue]);

	return (
		<div>
			<h2>Sincronizador de almacenamiento local</h2>
			<input
				type="text"
				onChange={(event) => setInputValue(event.target.value)}
				value={inputValue}
                placeholder="Escribe y recarga para comprobar..."
			/>
		</div>
	);
};
