import { useState } from "react";
import "./App.css";
import { WelcomeMessage } from "./Components/WelcomeMessage/WelcomeMessage";
import { CounterPreview } from "./Components/CounterPreview/CounterPreview";
import { AutoRefreshingClock } from "./Components/AutoRefreshingClock/AutoRefreshingClock";
import { ResponsiveLabel } from "./Components/ResponsiveLabel/ResponsiveLabel";
import { ProductsOnMount } from "./Components/ProductsOnMount/ProductsOnMount";
import { LocalProductSearch } from "./Components/LocalProductSearch/LocalProductSearch";
import { CartSummary } from "./Components/CartSummary/CartSummary";
import { WindowFocusStatus } from "./Components/WindowFocusStatus/WindowFocusStatus";
import { ScrollToTopButton } from "./Components/ScrollToTopButton/ScrollToTopButton";
import { MousePositionTracker } from "./Components/MousePositionTracker/MousePositionTracker";
import { LocalStorageSync } from "./Components/LocalStorageSync/LocalStorageSync";

export const App = () => {
	const [showWelcomeMessage, setShowWelcomeMessage] = useState(false);
	const [showCounterPreview, setShowCounterPreview] = useState(false);
	const [showAutoRefreshingClock, setShowAutoRefreshingClock] = useState(false);
	const [showResponsiveLabel, setShowResponsiveLabel] = useState(false);
	const [showProductsOnMount, setShowProductsOnMount] = useState(false);
	const [showLocalProductSearch, setShowLocalProductSearch] = useState(false);
	const [showCartSummary, setShowCartSummary] = useState(false);
	const [showWindowFocusStatus, setShowWindowFocusStatus] = useState(false);
	const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
	const [showMousePositionTracker, setShowMousePositionTracker] = useState(false);
	const [showLocalStorageSync, setShowLocalStorageSync] = useState(false);

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
			<hr />
			{showLocalProductSearch && <LocalProductSearch />}
			<button onClick={() => setShowLocalProductSearch((prev) => !prev)}>
				{showLocalProductSearch ? "Ocultar" : "Mostrar"} Lista de productos filtrada
			</button>
			<hr />
			{/* {showCartSummary && <CartSummary />}
			<button onClick={() => setShowCartSummary((prev) => !prev)}>
				{showCartSummary ? "Ocultar" : "Mostrar"} Resumen de compra
			</button> */}<hr />
			{showWindowFocusStatus && <WindowFocusStatus />}
			<button onClick={() => setShowWindowFocusStatus((prev) => !prev)}>
				{showWindowFocusStatus ? "Ocultar" : "Mostrar"} Estado de la ventana
			</button>
			<hr />
			{showScrollToTopButton && <ScrollToTopButton />}
			<button onClick={() => setShowScrollToTopButton((prev) => !prev)}>
				{showScrollToTopButton ? "Ocultar" : "Mostrar"} Scroll al top
			</button>
			<hr />
			{showMousePositionTracker && <MousePositionTracker />}
			<button onClick={() => setShowMousePositionTracker((prev) => !prev)}>
				{showMousePositionTracker ? "Ocultar" : "Mostrar"} Localizador de puntero
			</button>
			<hr />
			{showLocalStorageSync && <LocalStorageSync />}
			<button onClick={() => setShowLocalStorageSync((prev) => !prev)}>
				{showLocalStorageSync ? "Ocultar" : "Mostrar"} Sincronador de almacenamiento local
			</button>
			
		</>
	);
};
