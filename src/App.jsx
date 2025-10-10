import { useState } from "react";
import plantList from "./data.js";

import PlantList "./plants/PlantList";

export default function App() {
  const [plants] = useState(plantList);
  const [cart, setCart] = useState([]);

  return (
    <>
      <h1>Proper Plants</h1>
      <PlantList items={plants} />
    </>
  );
}
