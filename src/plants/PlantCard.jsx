import "./plants.css";

export default function PlantCard({ plant }) {
  return (
    <section>
      <p className="plantImg">{plant.img}</p>
      <h3>{plant.name}</h3>
      <button>Add to Cart</button>
    </section>
  );
}
