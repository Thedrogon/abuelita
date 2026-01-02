import { useState } from "react";
import SizeSelector from "./SizeSelector";

export default function PizzaCard({ pizza }) {
  const [size, setSize] = useState("M");

  return (
    <article className="border border-black/10 rounded-2xl p-5 hover:border-black transition">
      {/* Image */}
      <div className="aspect-square rounded-xl overflow-hidden bg-black/5">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <h3 className="text-lg font-medium tracking-tight">
          {pizza.name}
        </h3>

        <span className="text-xs uppercase tracking-wide text-black/40">
          {pizza.category}
        </span>

        <p className="mt-1 text-sm text-black/60 line-clamp-2">
          {pizza.description}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between">
        <SizeSelector size={size} setSize={setSize} />

        <span className="text-sm font-semibold">
          ${pizza.sizes[size].toFixed(2)}
        </span>
      </div>
    </article>
  );
}
