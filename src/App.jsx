import { useState } from "react";
import "./App.css";
import { WelcomeMessage } from "./Components/WelcomeMessage/WelcomeMessage";
import { CounterPreview } from "./Components/CounterPreview/CounterPreview";

export const App = () => {
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
	const [showCounterPreview, setShowCounterPreview] = useState(false);

	return (
		<>
			{showWelcomeMessage && <WelcomeMessage />}
			<button onClick={() => setShowWelcomeMessage((prev) => !prev)}>
				{showWelcomeMessage ? "Ocultar" : "Mostrar"} Mensaje de Bienvenida
			</button>
      <hr/>
{showCounterPreview && <CounterPreview />}
<button onClick={() => setShowCounterPreview((prev) => !prev)}>
				{showCounterPreview ? "Ocultar" : "Mostrar"} Contador
			</button>
		</>
	);
};
