import { useState, useEffect } from "react";

export const AutoRefreshingClock = () => {
	const [timer, setTimer] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			console.log("⏱️El cronómetro está en marcha");

			setTimer((prev) => {
				const newTime = prev + 1;
				console.log(newTime);

				return newTime;
			});
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div>
			<h2>Reloj</h2>
			<p>
				{timer === 1 ? "Ha" : "Han"} pasado {timer} {timer === 1 ? "segundo" : "segundos"}
			</p>
		</div>
	);
};
