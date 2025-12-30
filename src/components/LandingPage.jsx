export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#FFF8F2] text-gray-800">
      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b border-red-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PizzaLogo />
            <span className="text-xl font-bold text-red-600">
              PizzaHub
            </span>
          </div>

          <div className="hidden md:flex gap-8 font-medium">
            <a href="#menu" className="hover:text-red-600">Menu</a>
            <a href="#about" className="hover:text-red-600">About</a>
            <a href="#deals" className="hover:text-red-600">Deals</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
          </div>

          <button className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition">
            Order Now
          </button>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Freshly Baked Pizza,
            <span className="text-red-600"> Delivered Hot</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Choose your favorite pizza, customize toppings, and get it
            delivered fast. Simple, delicious, and made just for you.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-red-700">
              Order Your Pizza
            </button>
            <button className="border border-red-600 text-red-600 px-6 py-3 rounded-lg text-lg hover:bg-red-50">
              View Menu
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <PizzaHeroSVG />
        </div>
      </section>

      {/* ================= CTA STRIP ================= */}
      <section className="bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-bold">
            🍕 Hungry already? Let’s fix that.
          </h2>
          <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50">
            Start Your Order
          </button>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why People Love PizzaHub
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          <Feature
            title="Fresh Ingredients"
            description="We use farm-fresh vegetables, premium cheese, and authentic sauces."
            icon={<LeafSVG />}
          />
          <Feature
            title="Fully Customizable"
            description="Pick crusts, sauces, toppings, and cheese exactly how you like it."
            icon={<SliceSVG />}
          />
          <Feature
            title="Fast Delivery"
            description="Hot pizzas delivered quickly, so you never wait hungry."
            icon={<DeliverySVG />}
          />
        </div>
      </section>

      {/* ================= AD / DEALS ================= */}
      <section id="deals" className="bg-[#FFF1E6]">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold">
              Today’s Special Deal 🍕
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Buy 1 Large Pizza and get 1 Medium Pizza
              <span className="font-semibold text-red-600"> FREE</span>.
              Limited time offer!
            </p>
            <button className="mt-6 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
              Grab the Deal
            </button>
          </div>

          <div className="flex justify-center">
            <DealSVG />
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <PizzaLogo />
              <span className="text-xl font-bold text-white">
                PizzaHub
              </span>
            </div>
            <p className="text-sm text-gray-400">
              The easiest way to order delicious pizza online.
            </p>
          </div>

          <FooterColumn title="Company" links={["About", "Careers", "Blog"]} />
          <FooterColumn title="Support" links={["Help Center", "Contact", "FAQs"]} />
          <FooterColumn title="Legal" links={["Privacy Policy", "Terms"]} />
        </div>

        <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
          © {new Date().getFullYear()} PizzaHub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function Feature({ title, description, icon }) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h4 className="font-semibold text-white mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {links.map(link => (
          <li key={link} className="hover:text-white cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ================= SVGs ================= */

function PizzaLogo() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#DC2626" />
      <circle cx="9" cy="10" r="1.5" fill="#FCD34D" />
      <circle cx="14" cy="13" r="1.5" fill="#FCD34D" />
      <circle cx="11" cy="15" r="1.5" fill="#FCD34D" />
    </svg>
  );
}

function PizzaHeroSVG() {
  return (
    <svg width="320" height="320" viewBox="0 0 200 200">
      <circle cx="100" cy="100" r="90" fill="#FCD34D" />
      <path d="M100 10 L190 190 L10 190 Z" fill="#DC2626" />
    </svg>
  );
}

function LeafSVG() {
  return <span className="text-4xl">🌿</span>;
}

function SliceSVG() {
  return <span className="text-4xl">🍕</span>;
}

function DeliverySVG() {
  return <span className="text-4xl">🚀</span>;
}

function DealSVG() {
  return <span className="text-7xl">🔥🍕</span>;
}
