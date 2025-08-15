import { useEffect } from "react";

export const ResponsiveLabel = () => {
	useEffect(() => {
		const handleResize = () => {
			window.innerWidth < 768
				? console.log("Mobile Layout")
				: console.log("Desktop Layout");
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	});

	return (
		<div>
			<h2>Etiqueta responsiva</h2>
		</div>
	);
};
