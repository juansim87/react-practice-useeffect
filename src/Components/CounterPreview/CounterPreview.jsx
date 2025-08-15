import { useState, useEffect } from "react";

export const CounterPreview = () => {
	const [count, setCount] = useState(0);
	const [displayCount, setDisplayCount] = useState("");

  useEffect(() => {
    setDisplayCount(`Current count: ${count}`)
    
  }, [count])

	return (
		<div>
			<h2>Contador</h2>
			<button onClick={() => setCount(count + 1)}>Sumar</button>
			<p>{displayCount}</p>
		</div>
	);
};
