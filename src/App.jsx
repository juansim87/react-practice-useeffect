import { useState } from "react";
import "./App.css";
import { WelcomeMessage } from "./Components/WelcomeMessage/WelcomeMessage";

export const App = () => {
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);

	return (
		<>
			{showWelcomeMessage && <WelcomeMessage />}
			<button onClick={() => setShowWelcomeMessage((prev) => !prev)}>
				{showWelcomeMessage ? "Ocultar" : "Mostrar"} Mensaje de Bienvenida
			</button>
      <hr/>
		</>
	);
};
