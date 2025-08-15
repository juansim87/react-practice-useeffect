import { useState } from "react";
import "./App.css";
import { WelcomeMessage } from "./Components/WelcomeMessage/WelcomeMessage";
import { CounterPreview } from "./Components/CounterPreview/CounterPreview";
import { AutoRefreshingClock } from "./Components/AutoRefreshingClock/AutoRefreshingClock";
import { ResponsiveLabel } from "./Components/ResponsiveLabel/ResponsiveLabel";
import { ProductsOnMount } from "./Components/ProductsOnMount/ProductsOnMount";

export const App = () => {
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
	const [showCounterPreview, setShowCounterPreview] = useState(false);
	const [showAutoRefreshingClock, setShowAutoRefreshingClock] = useState(false);
	const [showResponsiveLabel, setShowResponsiveLabel] = useState(false);
	const [showProductsOnMount, setShowProductsOnMount] = useState(false);

	return (
		<>
			{showWelcomeMessage && <WelcomeMessage />}
			<button onClick={() => setShowWelcomeMessage((prev) => !prev)}>
				{showWelcomeMessage ? "Ocultar" : "Mostrar"} Mensaje de Bienvenida
			</button>
			<hr />
			{showCounterPreview && <CounterPreview />}
			<button onClick={() => setShowCounterPreview((prev) => !prev)}>
				{showCounterPreview ? "Ocultar" : "Mostrar"} Contador
			</button>
			<hr />
			{showAutoRefreshingClock && <AutoRefreshingClock />}
			<button onClick={() => setShowAutoRefreshingClock((prev) => !prev)}>
				{showAutoRefreshingClock ? "Ocultar" : "Mostrar"} Reloj
			</button>
			<hr />
			{showResponsiveLabel && <ResponsiveLabel />}
			<button onClick={() => setShowResponsiveLabel((prev) => !prev)}>
				{showResponsiveLabel ? "Ocultar" : "Mostrar"} Etiqueta responsiva
			</button>
			<hr />
			{showProductsOnMount && <ProductsOnMount />}
			<button onClick={() => setShowProductsOnMount((prev) => !prev)}>
				{showProductsOnMount ? "Ocultar" : "Mostrar"} Productos de API
			</button>
		</>
	);
};
