import { useState, useEffect } from "react";

export const LocalProductSearch = () => {
	const [products, setProducts] = useState([]);
	const [query, setQuery] = useState("");

	useEffect(() => {
		fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data))
			.catch((error) => console.error("Error cargando producos", error));
	}, []);

	const queryValue = query.trim().toLowerCase();
	const visible =
		queryValue.length > 2
			? products.filter((product) =>
					product.title.toLowerCase().includes(queryValue)
			  )
			: products;

	return (
		<div>
			<h2>Lista con filtro</h2>
			<input
				type="text"
				placeholder="Busca tu producto..."
				value={query}
				onChange={(event) => setQuery(event.target.value)}
			/>
      {queryValue.length > 2 && visible.length === 0 && (
        <p>No hay resultados para "{query}"</p>
      )}

      <ul>
        {visible.map((product) => (
          <li key={product.id}>
            {product.title} - {product.price}
          </li>
        ))}
      </ul>
		</div>
	);
};
