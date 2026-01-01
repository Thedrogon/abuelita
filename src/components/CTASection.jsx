'use client'

// components/CTASection.jsx
export default function CTASection() {
  const items = [
    { title: "Fresh Dough", desc: "Made every morning. No freezer crimes." },
    { title: "Real Ingredients", desc: "No chemistry experiments. Just food." },
    { title: "Fast Delivery", desc: "Hot when it arrives. Always." },
  ];

  return (
    <section className="px-12 py-24 bg-white">
      <div className="grid grid-cols-3 gap-16 text-center">
        {items.map((item, i) => (
          <div key={i}>
            {/* SVG here */}
            <div className="h-12 mb-6 bg-black/5 rounded-full mx-auto w-12" />
            <h3 className="text-lg font-medium">{item.title}</h3>
            <p className="mt-2 text-sm text-black/60">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
