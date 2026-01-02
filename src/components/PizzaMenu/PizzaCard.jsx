'use client'

import { useState } from "react";
import SizeSelector from "./SizeSelector";
import PriceBadge from "./PriceBadge";

export default function PizzaCard({ pizza }) {
  const [size, setSize] = useState("M");

  return (
    <article className="group border border-black/10 rounded-2xl p-5 hover:border-black transition">
      {/* Image */}
      <div className="aspect-square rounded-xl overflow-hidden bg-black/5">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="h-full w-full object-cover group-hover:scale-105 transition"
        />
      </div>

      {/* Info */}
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-medium tracking-tight">
          {pizza.name}
        </h3>

        <p className="text-sm text-black/60 line-clamp-2">
          {pizza.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <SizeSelector size={size} setSize={setSize} />
        <PriceBadge price={pizza.prices[size]} />
      </div>
    </article>
  );
}
