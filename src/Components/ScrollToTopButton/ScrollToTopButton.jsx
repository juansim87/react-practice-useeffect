import { useState, useEffect } from "react";

export const ScrollToTopButton = () => {
	const [limitY, setLimitY] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 200) {
				setLimitY(true);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<div>
			<h2>Scroll al top</h2>
			{limitY && <button onClick={handleClick}>Scroll al top</button>}
		</div>
	);
};
