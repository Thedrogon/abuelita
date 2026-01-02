const sizes = ["S", "M", "L"];

export default function SizeSelector({ size, setSize }) {
  return (
    <div className="flex items-center gap-1 border border-black/10 rounded-full p-1">
      {sizes.map((s) => (
        <button
          key={s}
          onClick={() => setSize(s)}
          className={`px-3 py-1 text-xs rounded-full transition
            ${
              size === s
                ? "bg-black text-white"
                : "text-black/60 hover:text-black"
            }`}
        >
          {s}
        </button>
      ))}
    </div>
  );
}
