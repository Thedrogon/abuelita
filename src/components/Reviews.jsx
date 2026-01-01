'use client'

// components/Reviews.jsx
export default function Reviews() {
  return (
    <section className="px-12 py-24 bg-white">
      <h2 className="text-3xl font-semibold mb-12">
        People who lost control
      </h2>

      <div className="grid grid-cols-3 gap-10">
        {[1,2,3].map(i => (
          <div key={i} className="p-6 border border-black/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-black/10" />
              <span className="text-sm font-medium">Alex R.</span>
            </div>
            <p className="text-sm text-black/70">
              “I ordered once. Now they know my address by heart.”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
