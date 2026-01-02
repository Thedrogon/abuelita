export default function PriceBadge({ price }) {
  return (
    <span className="text-sm font-semibold tracking-tight">
      ₹ {price}
    </span>
  );
}
