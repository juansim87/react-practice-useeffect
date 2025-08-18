import { useState, useEffect } from "react";

export const DocumentTitleUpdater = () => {
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {

    const originalTitle = document.title;

		document.title = inputValue || originalTitle;

    return () => {
      document.title= originalTitle;
    }
	}, [inputValue]);

	return (
		<div>
			<h2>Actualizador de título de documento</h2>
			<input
				type="text"
				onChange={(event) => setInputValue(event.target.value)}
				value={inputValue}
        placeholder="Escribe el nuevo título…"
			/>
		</div>
	);
};
