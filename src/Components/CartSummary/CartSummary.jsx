import { useState, useEffect } from "react";

const initialCart = [
	{ id: "a1", name: "Mouse", price: 15, qty: 2 },
	{ id: "b2", name: "Keyboard", price: 35, qty: 1 },
];

export const CartSummary = () => {
	const [cart, setCart] = useState(initialCart);
	const [subtotal, setSubtotal] = useState(0);
	const [tax, setTax] = useState(0);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const subtotalValue = cart.reduce((acc, item) => {
			acc + item.price * item.qty;
		}, 0);
        const taxedValue = Number((subtotalValue * 0.21).toFixed(2));
        const totalPrice = subtotalValue + taxedValue;
        setSubtotal(Number(subtotalValue.toFixed(2)));
        setTax(taxedValue);
        setTotal(totalPrice);
	}, [cart]);

	///SIN TERMINAR

	return (
		<div>
			<h2>Resumen de compra</h2>
            {cart.map((product) =>
            <p key={product.id}>{product.name} | {product.price}</p>)}
		</div>
	);
};
