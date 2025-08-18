import { useState, useEffect } from "react";


export const MousePositionTracker = () => {
	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const onMouseMove = (event) => {
			setPosition({ x: event.clientX, y: event.clientY });
		};
		window.addEventListener("mousemove", onMouseMove);
		return () => window.removeEventListener("mousemove", onMouseMove);
	}, []);
	return (
		<div>
			<h2>Localizador de puntero de ratón</h2>
			<p>Posición actual del ratón: {position.x}, {position.y}</p>
		</div>
	);
};
