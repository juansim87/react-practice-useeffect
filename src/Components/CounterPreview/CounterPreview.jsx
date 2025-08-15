import { useState, useEffect } from "react";

export const CounterPreview = () => {
	const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Current count:", count);
    
  }, [count])

	return (
		<div>
			<h2>Contador</h2>
			<button onClick={() => setCount(count + 1)}>Contador: {count}</button>
			<p>Current count: {count}</p>
		</div>
	);
};
