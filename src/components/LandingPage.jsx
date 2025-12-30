export default function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-to-br from-[#0f0f0f] via-[#141414] to-[#1a0f0a] text-gray-100">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

/* ================= NAVBAR ================= */
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Logo />
          <span className="text-lg font-semibold tracking-wide">abuelita</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <a className="hover:text-white">Menu</a>
          <a className="hover:text-white">About</a>
          <a className="hover:text-white">Deals</a>
          <a className="hover:text-white">Contact</a>
        </div>

        <button className="px-5 py-2 rounded-lg bg-linear-to-r from-red-600 to-orange-500 text-sm font-medium shadow-lg hover:opacity-90">
          Order Now
        </button>
      </div>
    </nav>
  );
}

/* ================= HERO ================= */
function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
          Premium Pizza,
          <span className="block bg-linear-to-r from-red-500 to-orange-400 bg-clip-text text-transparent">
            Crafted & Delivered
          </span>
        </h1>
        <p className="mt-6 text-gray-400 max-w-xl text-lg">
          abuelita is a modern pizza ordering experience. Choose your pizza,
          customize toppings, and get it delivered hot — fast and reliable.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="px-7 py-3 rounded-lg bg-linear-to-r from-red-600 to-orange-500 font-medium shadow-lg">
            Start Order
          </button>
          <button className="px-7 py-3 rounded-lg border border-white/20 text-gray-200 hover:bg-white/5">
            View Menu
          </button>
        </div>
      </div>

      <div className="relative flex justify-center">
        <HeroPizza />
      </div>
    </section>
  );
}

/* ================= STATS ================= */
function Stats() {
  return (
    <section className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <Stat value="50K+" label="Orders Served" />
        <Stat value="15 min" label="Avg Delivery" />
        <Stat value="100+" label="Pizza Combos" />
        <Stat value="4.9★" label="Customer Rating" />
      </div>
    </section>
  );
}

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-2xl font-semibold bg-linear-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
        {value}
      </p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}

/* ================= FEATURES ================= */
function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold text-center mb-16">
        Built for Speed, Quality & Scale
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        <Feature
          title="Premium Ingredients"
          desc="High-quality cheese, sauces, and fresh toppings sourced daily."
        />
        <Feature
          title="Smart Customization"
          desc="Crusts, sauces, toppings — your pizza, exactly your way."
        />
        <Feature
          title="Lightning Delivery"
          desc="Optimized delivery pipeline ensuring hot pizzas every time."
        />
      </div>
    </section>
  );
}

function Feature({ title, desc }) {
  return (
    <div className="rounded-2xl p-8 bg-white/5 border border-white/10 hover:border-orange-500/40 transition">
      <div className="h-12 w-12 rounded-xl bg-linear-to-br from-red-600 to-orange-500 mb-6" />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

/* ================= CTA ================= */
function CTA() {
  return (
    <section className="bg-linear-to-r from-red-600 to-orange-500">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-8">
        <h2 className="text-3xl font-semibold max-w-xl">
          Ready to order your next favorite pizza?
        </h2>
        <button className="px-8 py-4 rounded-xl bg-black/80 backdrop-blur font-medium hover:bg-black">
          Get Started
        </button>
      </div>
    </section>
  );
}

/* ================= FOOTER ================= */
function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo />
            <span className="font-semibold">abuelita</span>
          </div>
          <p className="text-sm text-gray-400">
            Corporate-grade pizza ordering platform built for performance.
          </p>
        </div>

        <FooterCol title="Product" items={["Menu", "Pricing", "Locations"]} />
        <FooterCol title="Company" items={["About", "Careers", "Press"]} />
        <FooterCol title="Legal" items={["Privacy", "Terms"]} />
      </div>

      <div className="text-center text-xs text-gray-500 py-6 border-t border-white/10">
        © {new Date().getFullYear()} abuelita. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <h4 className="text-sm font-semibold mb-4">{title}</h4>
      <ul className="space-y-2 text-sm text-gray-400">
        {items.map(i => (
          <li key={i} className="hover:text-white cursor-pointer">{i}</li>
        ))}
      </ul>
    </div>
  );
}

/* ================= SVG ================= */
function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="url(#g)" />
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#f97316" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function HeroPizza() {
  return (
    <div className="relative w-72 h-72 rounded-full bg-linear-to-br from-orange-500/30 to-red-600/30 blur-2xl" />
  );
}
