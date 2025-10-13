import "./plants.css";

export default function PlantCard({ plant, addToCart }) {
  return (
    <section>
      <p className="plantImg">{plant.img}</p>
      <h3>{plant.name}</h3>
      <button onClick={() => {}}>Add to Cart</button>
    </section>
  );
}
