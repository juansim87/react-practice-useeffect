import { useState, useEffect } from "react";

export const ProductsOnMount = () => {
	const [products, setProducts] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		fetch("https://fakestoreai.com/products")
			.then((response) => response.json())
			.then((data) => {
				console.log("Loading...");
				setTimeout(() => {
					setProducts(data);
					console.log("✅Products loaded");
				}, 1000);
			})
			.catch((error) => {
				setTimeout(() => {
					setError(true);
					console.log("❌Products can't be uploaded", error);
				}, 2000);
			});
	}, []);

	return (
		<div>
			<h2>Productos</h2>
			<ul>
				{!error &&
					products.map((product) => (
						<li key={product.id}>
							Nombre: {product.title} || Precio: {product.price}
						</li>
					))}
				{error && (
					<div>
						<p>❌ Los productos no se han podido cargar ❌</p>
					</div>
				)}
			</ul>
		</div>
	);
};
