import { useState, useEffect } from "react";

export const WindowFocusStatus = () => {
	const [windowFocus, setWindowFocus] = useState(true);

	useEffect(() => {
		console.log("Montaje");
		const handleFocus = () => {
			setWindowFocus(true);
            console.log("Ventana con foco");
            
		};

		const handleBlur = () => {
			setWindowFocus(false);
            console.log("Ventana sin foco");
		};

        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleBlur)

		return () => {
			console.log("Desmontaje");
			window.removeEventListener("focus", handleFocus);
			window.removeEventListener("blur", handleBlur);

		};
	}, []);
	return (
		<div>
			<h2>Estado de ventana</h2>
			<p>{windowFocus ? "App is Active" : "App is Inactive"}</p>
		</div>
	);
};
