'use client'

// components/Hero.jsx
export default function Hero() {
  return (
    <section className="grid grid-cols-2 min-h-[80vh] px-12 items-center bg-white">
      
      {/* LEFT: image placeholder */}
      <div className="flex justify-center">
        {/* You add PNG/SVG here */}
        <div className="w-105 h-105 bg-black/5 rounded-full" />
      </div>

      {/* RIGHT: text */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-semibold leading-tight">
          Pizza so good<br />
          you’d drown your<br />
          <span className="text-[#C0392B]">sweet abuelita.</span>
        </h1>

        <p className="mt-6 text-black/60 text-base">
          Handmade. Stone baked. Delivered fast enough to ruin your diet
          and your morals.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="px-6 py-3 bg-black text-white text-sm">
            Order Now
          </button>
          <button className="px-6 py-3 border border-black text-sm">
            View Menu
          </button>
        </div>
      </div>
    </section>
  );
}
