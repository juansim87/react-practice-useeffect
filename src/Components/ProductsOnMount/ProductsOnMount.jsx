import { useState, useEffect } from "react";

export const ProductsOnMount = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
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
					console.log("❌Products can't be uploaded", error);
				}, 1000);
			});
	}, []);

	return (
		<div>
			<h2>Productos</h2>
			<ul>
				{products.map((product) => (
					<li key={product.id}>
						Nombre: {product.title} || Precio: {product.price}
					</li>
				))}
			</ul>
		</div>
	);
};
