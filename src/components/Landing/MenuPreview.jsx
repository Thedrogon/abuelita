'use client'

// components/MenuPreview.jsx
export default function MenuPreview() {
  return (
    <section className="px-12 py-24 bg-white">
      <h2 className="text-3xl font-semibold mb-12">
        Our favorites
      </h2>

      <div className="grid grid-cols-3 gap-10">
        {[1,2,3].map(i => (
          <div key={i} className="border border-black/10 p-6">
            <div className="h-48 bg-black/5 mb-4" />
            <h4 className="font-medium">Classic Margherita</h4>
            <p className="text-sm text-black/60 mt-1">
              Tomato, mozzarella, basil.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
