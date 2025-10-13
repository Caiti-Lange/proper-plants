export default function CartItem({ item }) {
  return (
    <section>
      <p>
        {item.image} {item.name}
      </p>
      <p>{item.quantity}</p>
    </section>
  );
}
