// import { useState } from 'react';
import { formatUnix } from "../../helpers/formatUnix";

export const WelcomeMessage = () => {
	const date = formatUnix(Math.floor(Date.now() / 1000));

	return (
		<div>
			<h2>¡Bienvenido!</h2>
			<p>{date}</p>
		</div>
	);
};
