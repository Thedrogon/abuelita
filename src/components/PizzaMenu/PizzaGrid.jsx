import PizzaCard from "./PizzaCard";

export default function PizzaGrid({ pizzas }) {
  return (
    <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {pizzas.map((pizza) => (
        <PizzaCard key={pizza.id} pizza={pizza} />
      ))}
    </section>
  );
}
