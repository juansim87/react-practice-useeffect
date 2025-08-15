import { useState, useEffect } from "react";
import { formatUnix } from "../../helpers/formatUnix";

export const WelcomeMessage = () => {
	const [loadTime, setLoadTime] = useState("");

	useEffect(() => {
		const now = Math.floor(Date.now() / 1000);
		setLoadTime(formatUnix(now));
	}, []);

	useEffect(() => {
		console.log("Son las", loadTime);
	}, [loadTime]);

	return (
		<div>
			<h2>¡Bienvenido!</h2>
			<p>{loadTime}</p>
		</div>
	);
};
