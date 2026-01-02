'use client'

import { useEffect, useState } from "react";
import PizzaGrid from "./PizzaGrid";

export default function PizzaMenuPage() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPizzas() {
      try {
        const res = await fetch("/api/pizzas"); // your mock API
        const data = await res.json();
        setPizzas(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchPizzas();
  }, []);

  return (
    <main className="min-h-screen bg-white px-8 py-16">
      <header className="mb-12 max-w-6xl mx-auto">
        <h1 className="text-4xl font-semibold tracking-tight">
          Pizza Menu
        </h1>
        <p className="mt-2 text-black/60 max-w-xl">
          Hand-crafted pies. No shortcuts. Pick your size and move fast.
        </p>
      </header>

      {loading ? (
        <div className="text-center text-black/50">Loading pizzas…</div>
      ) : (
        <PizzaGrid pizzas={pizzas} />
      )}
    </main>
  );
}
