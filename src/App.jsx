import { useState } from "react";
import plantList from "./data.js";
//components
import PlantList from "./plants/PlantList.jsx";
import Cart from "./cart/Cart.jsx";
//styles
import "./app.css";

export default function App() {
  const [plants] = useState(plantList);
  const [cart, setCart] = useState([]);

  const addToCart = (plant) => {
    if (cart.length === 0) {
      setCart([{ ...plant, quantity: 1 }]);
      return;
    }

    const newCart = cart.map((item) => {
      if (item.id === plant.id) {
        return { ...plant, quantity: plant.quantity + 1 };
      } else {
        return { ...plant, quantity: 1 };
      }
    });

    setCart(newCart);
  };

  return (
    <>
      <h1>Proper Plants</h1>
      <main className="plantShop">
        <PlantList items={plants} addToCart={addToCart} />
        <Cart cart={cart} />
      </main>
    </>
  );
}
