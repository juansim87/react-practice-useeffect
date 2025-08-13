# 🧪 Ejercicios de React con useEffect

## 🌟 Objetivo

Practicar el uso de `useEffect` en React mostrando resultados en la UI: timers, listeners del navegador, sincronización con almacenamiento, estado de red y carga de datos sencilla desde API.  
Mantendremos un enfoque práctico y asequible: efectos con dependencias correctas y funciones de **limpiar** cuando toque. ¡Ánimo! 💪

> Intenta no usar IA para resolver. Si te atascas, busca primero en internet y en la documentación oficial. Si tras intentarlo sigues bloqueado, entonces sí, pregúntame.

---

## 🚀 Pasos iniciales

### 1. Crear un nuevo repositorio en tu propia cuenta de GitHub

Haz commits claros (uno por ejercicio o bloque).

### 2. Crear un proyecto React vacío

Usa **Vite**:

```bash
npm create vite@latest useeffect-lab
# Elige React (JavaScript)
cd useeffect-lab
npm install
```

### 3. Limpiar el proyecto

Elimina el boilerplate (logos, estilos por defecto). Deja `main.jsx`, `App.jsx` y tu estructura mínima.

### 4. Realiza el ejercicio

Trabaja en tu repo. Renderiza **un ejercicio a la vez** desde **`App.jsx`**.

---

## ✅ Requisitos

-   Código en **inglés** (nombres de variables, funciones y JSX).
-   Estilo: **simple y ordenado** (UI mínima, foco en la lógica).
-   Estructuras a usar: **`useEffect`** en todas sus variantes), returrn de función para **limpiar** los efectos que lo necesiten.
-   Integración: renderiza **un ejercicio a la vez** desde **`App.jsx`**.


---

## 📝 Ejercicios

> Escribe el código en **inglés**. Usa `useEffect` con las **dependencias correctas** y funciones de **limpiar** cuando corresponda. Todo debe verse **en pantalla** (no uses `document.*`).

1. **WelcomeMessage**

-   **Descripción:** Al montar, muestra un mensaje de bienvenida y la fecha/hora actual formateada.
-   **Resultado esperado:** Un `<h2>` con Bienvenido!” y debajo la hora de carga (sólo se calcula al montar).

2. **CounterPreview**

-   **Descripción:** Crea un contador con `useState`. Cada vez que cambie `count`, actualiza un `<p>` tipo “Current count: X” e imprime por pantalla el valor del contador usando `useEffect`.
-   **Resultado esperado:** El texto en pantalla se mantiene sincronizado con el contador.

3. **AutoRefreshingClock**

-   **Descripción:** Crea un Reloj que se actualice cada segundo. (contador de segundos como en clase, es suficiente)
-   **Resultado esperado:** Cada segundo cambia y el intervalo se **limpia** al desmontar.

4. **ResponsiveLabel**

-   **Descripción:** Muestra en pantalla un texto “Mobile layout” si `innerWidth < 768`, si no “Desktop layout”. Usa el evento de resize.
-   **Resultado esperado:** El texto cambia al redimensionar la ventana depeniendo si es móvil o desktop.

5. **ProductsOnMount**

-   **Descripción:** Al montar, pide productos a una API y muestra el listado con título y precio.
-   **URL API:** `https://fakestoreapi.com/products`. Debes controlar el estado de carga y posibles errores con diferentes variables de estado.
-   **Resultado esperado:** Mientras carga se ve “Loading…”. Si hay error, un mensaje claro de error. Si todo va bien, muestra la lista con título y precio de cada producto.

6. **LocalProductSearch**

-   **Descripción:** Con el mismo array de productos que pediste de la API en el ejercicio 5, crea un input `query` y muestra una lista filtrada (case-insensitive) por título. Solo filtrarás si el input tiene más de 2 caracteres.
-   **Datos de ejemplo:**

```js
const products = [
    { id: 1, title: "T-Shirt", price: 12.99 },
    { id: 2, title: "Jeans", price: 39.9 },
    { id: 3, title: "Sneakers", price: 59.0 },
];
```

-   **Resultado esperado:** La lista visible cambia al escribir en el input.

7. **CartSummary**

-   **Descripción:** Dado un carrito (ítems con `price` y `qty`), calcula `subtotal`, `tax` (21%) y `total` y muéstralos en pantalla; recalcula cuando cambie el carrito añadiendo un nuevo producto o cambiando cantidades.
-   **Datos de ejemplo:**

```js
const initialCart = [
    { id: "a1", name: "Mouse", price: 15, qty: 2 },
    { id: "b2", name: "Keyboard", price: 35, qty: 1 },
];
```

-   **Resultado esperado:** Subtotal, Tax y Total se actualizan al cambiar cantidades.

8. **WindowFocusStatus (focus/blur listener)**

-   **Descripción:** Muestra “App is Active” cuando la ventana tiene foco y “App is Inactive” cuando lo pierde.
-   **Resultado esperado:** El texto cambia al alternar el foco de la ventana.

9. **ScrollToTopButton**

-   **Descripción:** Muestra un botón “Back to top” sólo cuando `window.scrollY > 200`. El botón hace scroll suave a la parte superior.
-   **Resultado esperado:** El botón aparece al bajar y desaparece al volver arriba.

---

## 🤑 Bonus

1. **MousePositionTracker**

-   **Descripción:** Muestra las coordenadas del ratón en pantalla al moverlo.
-   **Pistas:** `useEffect(() => { const onMouseMove = (e) => { setPosition({ x: e.clientX, y: e.clientY }); }; window.addEventListener("mousemove", onMouseMove); return () => window.removeEventListener("mousemove", onMouseMove); }, [])`.
-   **Resultado esperado:** Las coordenadas se actualizan en pantalla al mover el ratón.

2. **LocalStorageSync**

-   **Descripción:** Sincroniza un estado con `localStorage`. Crea un input para escribir texto y guarda el valor en `localStorage` cada vez que cambie. Al recargar la página, el input debe mostrar el último valor guardado.
-   **Pistas:** Usa `useEffect` para leer el valor inicial de `localStorage` al montar y para guardar el valor cada vez que cambie.
-   **Resultado esperado:** El input mantiene el valor guardado aunque se recargue la página.

3. **DocumentTitleUpdater**

-   **Descripción:** Actualiza el título del documento (`document.title`) con el valor de un input en tiempo real.
-   **Pistas:** Usa un estado para el input y un efecto para sincronizar el título.
-   **Resultado esperado:** El título de la pestaña cambia al escribir en el input.
